function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}
let n = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
let resultat = factorielle(n);
document.getElementById("resultat_9").innerHTML =
    "Factorielle de " + n + " = " + resultat;
console.log("Factorielle de", n, "=", resultat);
