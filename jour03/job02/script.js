$(document).ready(function() {
    var images = [
        'images/arc1.png',
        'images/arc2.png',
        'images/arc3.png',
        'images/arc4.png',
        'images/arc5.png',
        'images/arc6.png'
    ];

    var correctOrder = [0, 1, 2, 3, 4, 5]; // Ordre correct des images
    var currentOrder = [];

    function shuffleImages() {
        $('#dropZone').empty(); // Vide la zone de dépôt
        currentOrder = images.sort(() => Math.random() - 0.5); // Mélange les images
        currentOrder.forEach(function(image, index) {
            $('#dropZone').append('<img src="' + image + '" class="rainbowImage" draggable="true" data-index="' + index + '">');
        });
    }

    function checkOrder() {
        var isCorrect = true;
        $('#dropZone img').each(function() {
            if ($(this).data('index') !== currentOrder.indexOf($(this).attr('src'))) {
                isCorrect = false;
                return false; // Arrête l'itération
            }
        });
        return isCorrect;
    }

    $('#shuffle').click(function() {
        shuffleImages();
        $('#message').text('');
    });

    $('#dropZone').on('dragstart', '.rainbowImage', function(event) {
        event.originalEvent.dataTransfer.setData('text/plain', $(this).attr('src'));
    });

    $('#dropZone').on('dragover', function(event) {
        event.preventDefault();
    });

    $('#dropZone').on('drop', function(event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData('text/plain');
        var img = $('<img src="' + data + '" class="rainbowImage" draggable="true">');
        $(this).append(img);
        if (checkOrder()) {
            $('#message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#message').text('Vous avez perdu').css('color', 'red');
        }
    });
});
