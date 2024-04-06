// Vérification du domaine de l'email
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var domain = email.split('@')[1];
    if (domain !== 'laplateforme.io') {
        alert('Veuillez utiliser une adresse email avec le domaine @laplatforme.io');
    } else {
        alert('Inscription réussie');
    }
});

// Gestion des demandes d'autorisation
document.getElementById('request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var date = new Date(document.getElementById('date').value);
    var today = new Date();
    if (date < today) {
        alert('La date de présence doit être future.');
        return;
    }
    var requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.push({ date: date.toISOString().split('T')[0], status: 'pending' });
    localStorage.setItem('requests', JSON.stringify(requests));
    alert('Demande envoyée');
});

// Backoffice et gestion des droits
function displayRequests() {
    var requests = JSON.parse(localStorage.getItem('requests')) || [];
    var list = document.getElementById('requests-list');
    list.innerHTML = '';
    requests.forEach(function(request, index) {
        var item = document.createElement('div');
        item.textContent = 'Date: ' + request.date + ', Statut: ' + request.status;
        var acceptButton = document.createElement('button');
        acceptButton.textContent = 'Accepter';
        acceptButton.onclick = function() {
            request.status = 'accepted';
            localStorage.setItem('requests', JSON.stringify(requests));
            displayRequests();
        };
        var refuseButton = document.createElement('button');
        refuseButton.textContent = 'Refuser';
        refuseButton.onclick = function() {
            request.status = 'refused';
            localStorage.setItem('requests', JSON.stringify(requests));
            displayRequests();
        };
        item.appendChild(acceptButton);
        item.appendChild(refuseButton);
        list.appendChild(item);
    });
}

displayRequests();

// Backoffice pour les modérateurs et administrateurs
document.getElementById('login-as-moderator').addEventListener('click', function() {
    // Simuler la connexion en tant que modérateur
    alert('Connecté en tant que modérateur');
    displayRequests();
});

document.getElementById('login-as-admin').addEventListener('click', function() {
    // Simuler la connexion en tant qu'administrateur
    alert('Connecté en tant qu\'administrateur');
    displayRequests();
});
