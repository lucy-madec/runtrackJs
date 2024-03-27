$(document).ready(function() {
    // Gestionnaire d'évènements pour le bouton "Afficher le texte"
    $('#showText').click(function() {
        $('#textContainer').show(); // Affiche le texte
    });

    // Gestionnaire d'évènements pour le bouton "Cacher le texte"
    $('#hideText').click(function() {
        $('#textContainer').hide(); // Cache le texte
    });
});