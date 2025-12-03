function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    }
    return n + sommeRecursive(n - 1);
}
let n = parseInt(prompt("Entrez un nombre n :"));
let s1 = sommeIterative(n);
let s2 = sommeRecursive(n);
document.getElementById("resultat_10").innerHTML =
    "Somme itérative : " + s1 + "<br>" +
    "Somme récursive : " + s2;
let reponse1 = "1 - Le code le plus lisible est la version récursive.";
let reponse2 = "2 - Le code le plus performant est la version itérative.";
let reponse3 = "3 - La récursion peut poser des problèmes à cause du dépassement de pile.";
let reponse4 = "4 - On privilégie une boucle pour éviter les erreurs de pile et améliorer les performances.";
document.getElementById("resultat_10").innerHTML =
    reponse1 + "<br>" +
    reponse2 + "<br>" +
    reponse3 + "<br>" +
    reponse4;
