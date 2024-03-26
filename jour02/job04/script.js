// Sélection du textarea
var keylogger = document.getElementById('keylogger');

// Fonction pour ajouter une lettre dans le textarea
function ajouterLettre(event) {
    var touche = event.key;
    var focus = document.activeElement;

    // Vérifie si la touche est une lettre (a-z)
    if (/^[a-z]$/i.test(touche)) {
        // Si le focus est sur le textarea alors la lettre est ajoutée deux fois
        if (focus === keylogger) {
            keylogger.value += touche + touche;
        } else {
            // Sinon, la lettre est ajoutée une fois
            keylogger.value += touche;
        }
    }
}

// Ajout d'un écouteur d'évènements pour capturer les évènements de frappe sur le clavier
document.addEventListener('keydown', ajouterLettre);