//on cree une fonction constructeur pour nos utilisatuers
//une fonction constructeur commence par une majuscule
class Utilisateur {
    constructor(prenom, nom, email) {
        this.prenom = prenom; // this va etre remplacer par le nom de l'objet dans lequel on est actuellement
        this.nom = nom;
        this.email = email;

        
        // this.sePresenter = () => {
            //     console.log("Bonjour, je m'appelle " + this.nom + " " + this.prenom + " et je suis joingnable a " + this.email + ". ");
            // };


            // **************************GETTEUR

            
        }
        //Permet de de recuperer une propriété
        get nomComplet() {
            return this.prenom + ' ' + this.nom;
        };

        //permet de definir une valeur
        set nomComplet(valeur) {
            [this.prenom, this.nom] = valeur.split(' '); // split() divise une chaîne de caractère à partir d'un séparateur pour faire un tableau (espace si rien n'est specifier)
        }
}

// on cree un objet
// on utilise ici un var pour ne pas que la valeur de mark se fasse ecraser
var mark = new Utilisateur("Mark", "ZUCKERBERG","mark@facebook.com");
console.log(mark.nomComplet)
mark.nomComplet = "Bill Gates"
console.log(mark.nomComplet)