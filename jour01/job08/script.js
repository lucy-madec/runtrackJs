function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}