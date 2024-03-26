const body = document.body;
// Séquence du code Konami
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
let konamiIndex = 0;

// Fonction pour détecter le code Konami
function detectKonami(event) {

    const key = event.key;
    // Vérifie si la touche pressée est une flèche
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;

        // Si la séquence est complète, ça sytilise la page
        if (konamiIndex === konamiCode.length) {
            body.classList.add('stylized');
        }
    } else {
        // Réinitialise l'index si la touche pressée n'est pas une flèche
        konamiIndex = 0;
    }
}

// Ajout d'un écouteur d'évènements pour les touches pressées
document.addEventListener('keydown', detectKonami);