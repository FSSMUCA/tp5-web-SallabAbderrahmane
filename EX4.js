let min = Number(prompt("Entrez le nombre minimal :"));
let max = Number(prompt("Entrez le nombre maximal :"));
if (min > max) {
    let temp = min;
    min = max;
    max = temp;
}
let resultat = "";
for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultat += "Five&Three<br>";
    } else if (i % 3 === 0) {
        resultat += "Three<br>";
    } else if (i % 5 === 0) {
        resultat += "Five<br>";
    } else {
        resultat += i + "<br>";
    }
}
document.getElementById("resultat_4").innerHTML = resultat;
