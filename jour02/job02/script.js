// Fonction pour afficher ou cacher l'article
function showhide() {
    // Sélection de l'article
    var article = document.getElementById('citation');

    // Si l'article n'existe pas, on le crée
    if (!article) {
        article = document.createElement('article');
        article.id = 'citation';
        article.textContent = 'L\'important n\'est pas la chute, mais l\'atterrissage.';
        document.body.appendChild(article);
    } else {
        // Si l'article existe, on le supprime
        document.body.removeChild(article);
    }
}

// Ajout d'un écouteur d'évnements a bouton pour exécuter la fonction showhide() lors du clic
document.getElementById('button').addEventListener('click', showhide);