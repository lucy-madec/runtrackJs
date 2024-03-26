// Fonction pour incrémenter le compteur
function addOne() {
    // Sélection du paragraphe
    var compteur = document.getElementById('compteur');

    // Récupération du contenu actuel du compteur
    var valeurCompteur = parseInt(compteur.textContent, 10);

    // Incrémentation de la valeur du compteur
    valeurCompteur++;

    // Mise à jour du contenu du paragraphe avec la nouvelle valeur
    compteur.textContent = valeurCompteur;
}

// Ajout d'un écouteur d'évènments au bouton pour exécuter la fonction addOne() lors du clic
document.getElementById('button').addEventListener('click', addOne);