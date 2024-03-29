document.addEventListener('DOMContentLoaded', function() {
    const connexionForm = document.getElementById('connexionForm');
    const inscriptionForm = document.getElementById('inscriptionForm');

    if (connexionForm) {
        connexionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateConnexionForm();
        });
    }

    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateInscriptionForm();
        });
    }
});

function validateConnexionForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Vérification de l'email
    if (!email.validity.valid) {
        emailError.textContent = 'Veuillez entrer un email valide.';
    } else {
        emailError.textContent = '';
    }

    // Vérification du mot de passe
    if (!password.validity.valid) {
        passwordError.textContent = 'Veuillez entrer un mot de passe valide.';
    } else {
        passwordError.textContent = '';
    }

    // Si aucune erreur, soumettre le formulaire
    if (emailError.textContent === '' && passwordError.textContent === '') {
        // Soumettre le formulaire
        connexionForm.submit();
    }
}

function validateInscriptionForm() {
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const emailInscription = document.getElementById('emailInscription');
    const passwordInscription = document.getElementById('passwordInscription');
    const adresse = document.getElementById('adresse');
    const codePostal = document.getElementById('codePostal');
    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const emailInscriptionError = document.getElementById('emailInscriptionError');
    const passwordInscriptionError = document.getElementById('passwordInscriptionError');
    const adresseError = document.getElementById('adresseError');
    const codePostalError = document.getElementById('codePostalError');

    // Vérification des champs
    if (!nom.validity.valid) {
        nomError.textContent = 'Veuillez entrer un nom valide.';
    } else {
        nomError.textContent = '';
    }

    if (!prenom.validity.valid) {
        prenomError.textContent = 'Veuillez entrer un prénom valide.';
    } else {
        prenomError.textContent = '';
    }

    if (!emailInscription.validity.valid) {
        emailInscriptionError.textContent = 'Veuillez entrer un email valide.';
    } else {
        emailInscriptionError.textContent = '';
    }

    if (!passwordInscription.validity.valid) {
        passwordInscriptionError.textContent = 'Veuillez entrer un mot de passe valide.';
    } else {
        passwordInscriptionError.textContent = '';
    }

    if (!adresse.validity.valid) {
        adresseError.textContent = 'Veuillez entrer une adresse valide.';
    } else {
        adresseError.textContent = '';
    }

    if (!codePostal.validity.valid) {
        codePostalError.textContent = 'Veuillez entrer un code postal valide.';
    } else {
        codePostalError.textContent = '';
    }

    // Si aucune erreur, soumettre le formulaire
    if (nomError.textContent === '' && prenomError.textContent === '' && emailInscriptionError.textContent === '' && passwordInscriptionError.textContent === '' && adresseError.textContent === '' && codePostalError.textContent === '') {
        // Soumettre le formulaire
        inscriptionForm.submit();
    }
}
