function bisextile(annee) {
    if (annee % 4 === 0) {
        if (annee % 100 === 0) {
            return annee % 400 === 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}