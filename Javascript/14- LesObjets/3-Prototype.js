//on cree une fonction constructeur pour nos utilisatuers
//une fonction constructeur commence par une majuscule
function Utilisateur(prenom,nom,email) {
    this.prenom = prenom; // this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    this.nom = nom;
    this.email = email;

    this.sePresenter = () => {
        console.log("Bonjour, je m'appelle " + this.nom +" "+ this.prenom+" et je suis joingnable a "+ this.email+". ")
    } 

}

// on cree un objet
// on utilise ici un var pour ne pas que la valeur de mark se fasse ecraser
var mark = new Utilisateur("mark", "zuckerberg","mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates","bill@windows.com");

console.log(mark) // Javascript va creer un objet __proto__

Utilisateur.prototype.sePresenter = function(){
    console.log("Bonjour, je m'appelle " + this.nom +" "+ this.prenom+" et je suis joingnable a "+ this.email+". ")
} 

//avec .prototype, Tout les objet issus de utilisateur auront acces a la methode sePresenter()
mark.sePresenter()
bill.sePresenter()
