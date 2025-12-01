let nb = prompt("Entrez un nombre :");
nb = Number(nb); 
let message = "";
if (nb < 0) {
    message = "Nombre négatif";
} else {
    if (nb <= 10) {
        message = "Petit";
    } else {
        if (nb <= 50) {
            message = "Moyen";
        } else {
            if (nb > 100) {
                message = "Très grand";
            } else {
                message = "Grand";
            }
        }
    }
}
document.getElementById("resultat_3").textContent = message;
