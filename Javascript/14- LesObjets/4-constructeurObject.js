//on cree une fonction constructeur pour nos utilisatuers
//une fonction constructeur commence par une majuscule
function Utilisateur(prenom,nom,email) {
    this.prenom = prenom; // this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    this.nom = nom;
    this.email = email;

}

Utilisateur.prototype.sePresenter = function(){
    console.log("Bonjour, je m'appelle " + this.nom +" "+ this.prenom+" et je suis joingnable a "+ this.email+". ")
} 
// on cree un objet
// on utilise ici un var pour ne pas que la valeur de mark se fasse ecraser
var mark = new Utilisateur("mark", "zuckerberg","mark@facebook.com");

console.log(mark)



//Avec un constructeur Object, on peux declarer des objet "generique"

var monObjet = new Object() // j'ai declarer ici un nouvelle objet sans 
monObjet.titre = "titre de l'objet";

//maintenant on va faire recuperer une methode de mark