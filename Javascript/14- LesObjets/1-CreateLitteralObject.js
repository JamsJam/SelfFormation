let mark = {
    prenom: "mark",
    nom: "zuckerberg",
    email: "mark@facebook.fr",

    //a l'ancienne :
    sePresenter: function(){
        console.log('Bonjours')// bonjour
        console.log("Bonjours, je m'appelle "+ this.prenom )// this va etre remplacer par le nom de l'objet dans lequel on est actuellement
    }
}

mark.sePresenter();


function recevoirCoordonnees() {
    return {
            latitude: 35, 
            longitude: 139
            }

}

let coordonnees = recevoirCoordonnees();
console.log(coordonnees.latitude); //35
console.log(coordonnees.longitude);//139
