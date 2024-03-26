// Fonction pour récupérer et afficher la citation
function citation() {
    // Récupération du contenu de l'élément avec l'id "citation"
    var citationText = document.getElementById('citation').textContent;

    // Affichage du contenu dans la console
    console.log(citationText);
}

// Ajout d'un écouteur d'évènements au bouton pour exécuter la fonction citation() lors du clic
document.getElementById('button').addEventListener('click', citation);