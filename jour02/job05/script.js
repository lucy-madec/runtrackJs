// Sélection du footer
var footer = document.querySelector('footer');

// Fonction pour changer la couleur du footer
function changeFooterColor() {
    // Calcul du pourcentage de défilement
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;

    // Définition des couleurs en fonction du pourcentage de défilement
    if (scrollPercent <= 25) {
        footer.style.backgroundColor = '#f00'; // Rouge
    } else if (scrollPercent <= 50) {
        footer.style.backgroundColor = '#0f0'; // Vert
    } else if (scrollPercent <=75) {
        footer.style.backgroundColor = '#00f'; // Bleu
    } else {
        footer.style.backgroundColor = '#000'; // Noir
    }
}

// Ajout d'un écouteur d'évènements pour le défilement de la page
window.addEventListener('scroll', changeFooterColor);