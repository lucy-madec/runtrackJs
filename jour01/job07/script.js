function jourTravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();

    // Vérifie si la date est un week-end
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
        // Vérifie si la date est un jour férié
        var joursFeries = [
            new Date(annee, 0, 1), // 1er janvier
            new Date(annee, 4, 1), // 1er mai
            new Date(annee, 4, 8), // 8 mai
            new Date(annee, 11, 25) // 25 décembre
        ];

        var estJourFerie = joursFeries.some(function(jourFerie) {
            return jourFerie.getDate() === jour &&
                   jourFerie.getMonth() === mois - 1 &&
                   jourFerie.getFullYear() === annee;
        });

        if (estJourFerie) {
            console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
        } else {
            console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
        }
    }
}