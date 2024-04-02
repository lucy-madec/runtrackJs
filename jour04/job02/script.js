function jsonValueKey(jsonString, key) {
    // Convertir la chaîne de caractères JSON en objet JavaScript
    var jsonObject = JSON.parse(jsonString);

    // Accéder à la valeur de la clé
    var value = jsonObject[key];

    // Retourner la valeur
    return value;
}

// Utilisation de la fonction
var jsonString = '{ "name":"La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019" }';
var key = "city";
var result = jsonValueKey(jsonString, key);

console.log(result); // Affiche "Marseille"