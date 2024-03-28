$(document).ready(function() {
    // Fonction pour mélanger les images
    function shuffleImages() {  
        var images = $('.rainbow-img');
        for (var i = 0; i < images.length; i++) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var temp = images[i].src;
            images[i].src = images[randomIndex].src;
            images[randomIndex].src = temp;
        }
    }

    // Fonction pour vérifier si les images sont dans le bon ordre
    function checkOrder() {
        var ordered = true;
        var images = $('.rainbow-img');
        var arcs = ['arc1', 'arc2', 'arc3', 'arc4', 'arc5', 'arc6'];
        images.each(function (index) {
            if (!$(this).attr('src').includes(arcs[index])) {
                ordered = false;
                return false; // Sortir de la boucle each dès qu'une image est mal placée
            }
        });
        return ordered;
    }

    // Bouton pour mélanger les images
    $('#shuffle-btn').click(function() {
        shuffleImages();
        $('#message').text('');
    });

    // Contrôler l'ordre des images après un drag and drop
    $('#sortable-container').sortable({
        revert: true,
        stop: function() {
            if(checkOrder()) {
                $('#message').text('Vous avez gagné').css('color', 'green');
            } else {
                $('#message').text('Vous avez perdu').css('color', 'red');
            }
        }
    });
});
