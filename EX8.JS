function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}
let totalHT = parseFloat(prompt("Entrez le total HT :"));
let remise = parseFloat(prompt("Entrez la remise en % :"));
let totalFinal = totalAvecRemise(totalHT, remise);
document.getElementById("resultat_8").innerHTML =
    "Total final après remise : " + totalFinal.toFixed(2) + " €";
console.log("Total final :", totalFinal);
