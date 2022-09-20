//call et aply servent a invoquer une fonction

//callapply
let gandalf = {titre: "magicien"}

function direBonjour(){
    console.log("bonjour "+ this.titre); //Error titre n'existe pas
}

direBonjour.call(gandalf)//"bonjour magicien"
direBonjour.apply(gandalf)//"bonjour magicien"


function direBonjour2(arme, degat){
    console.log("bonjour "+ this.titre+" vous avez "+ arme +" qui fait "+degat+" points de degats"); //Error titre n'existe pas
}


direBonjour2.call(gandalf, "un baton", 75)//"bonjour magicien vous avez un baton qui fait 75 points de degats"

//Apply dois avoir ses argument sous la forme d'un tableau (utile avec le json)
direBonjour2.apply(gandalf, ["un baton", 75])//"bonjour magicien vous avez un baton qui fait 75 points de degats"



//bind
//Objectif, changer le context de this(this fait normalement reference a l'objet dans lequel on se trouve)

this.valeur = "Window";

let monObjet = {
    valeur: "Object",
    getValeur: function() {
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;

// a l'execution, this.valeur n'est plus dans l'objet, donc il vaut "Window" il faudra donct changer le contex grace a bind
maValeur(); //"window"

let maValeurAvecBind = monObjet.getValeur.bind(monObjet);

maValeurAvecBind();