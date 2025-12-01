let prenom = "Sara";
let age = 22;
let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
age = 23;           
let ageModifie = age;   
let nouvellePhrase = "Je m'appelle " + prenom + " et j'ai " + ageModifie + " ans.";
document.getElementById("resultat_2").innerHTML = 
    phrase + "<br>" + nouvellePhrase;
