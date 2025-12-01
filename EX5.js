let n = Number(prompt("Entrez un nombre :")); 
let result = "";
result += "<h3>Table de multiplication de " + n + "</h3>";
result += "<table border='1' cellpadding='5' cellspacing='0'>";
result += "<tr><th>Expression</th><th>Résultat</th></tr>";
for (let i = 1; i <= 10; i++) {
    result += "<tr>";
    result += "<td>" + n + " x " + i + "</td>";
    result += "<td>" + (n * i) + "</td>";
    result += "</tr>";
}
result += "</table>";
document.getElementById("resultat_5").innerHTML = result;

