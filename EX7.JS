function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    }
    return false;
}
let password = prompt("Entrez votre mot de passe :");
if (verifierMotDePasse(password)) {
    document.getElementById("resultat_7").innerHTML = "Mot de passe valide";
    console.log("Mot de passe valide");
} else {
    document.getElementById("resultat_7").innerHTML = "Mot de passe non valide";
    console.log("Mot de passe non valide");
}
