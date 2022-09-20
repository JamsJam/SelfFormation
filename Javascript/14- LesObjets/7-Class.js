class Animal {
    constructor(nombreDePattes, poids) {
        this.nombreDePattes         =   nombreDePattes ;
        this.poids                  =   poids;
    }

    presentation(){
        console.log('cet animal possege ' +this.nombreDePattes+' pattes et pèse '+this.poids)
    }
}

// La class permet de faier appel au constructeue
// extend permet d'appeler la class animal
class Oiseau extends Animal {
    constructor(nombreDePattes, poids,longueurDesAiles) {
        super(nombreDePattes, poids);
        this.longueurDesAilles          =   longueurDesAiles;
    }

    voler() {
        console.log("L'oiseau vole !");
    }
}

var perroquet = new Oiseau(2, "1kg", "Grande")
console.log(perroquet) //Oiseau {nombreDePattes: 2, poids: '1kg', longueurDesAilles: 'Grande'}
perroquet.presentation() //cet animal possege 2 pattes et pèse 1kg
perroquet.voler() // L'oiseau vole !