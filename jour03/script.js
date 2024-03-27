// Sélection des boutons
var showTextButton = document.getElementById('showText');
var hideTextButton = document.getElementById('hideText');

// Création de l'élément <p> pour le texte
var textElement = document.createElement('p');
textElement.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";
textElement.style.display = 'none'; // Initialisation à caché
document.body.appendChild(textElement);

// Fonction pour afficher le texte
function showText() {
    textElement.style.display = 'block';
}

// Fonction pour cacher le texte
function hideText() {
    textElement.style.display = 'none';
}

// Ajout d'écouteurs d'évènements aux boutons
showTextButton.addEventListener('click', showText);
hideTextButton.addEventListener('click', hideText);