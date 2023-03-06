// 1) on cree les classe personnage, magicien et guerrier

class Personnage{
    constructor (pseudo, classe, sante, attaque, niveau = 1){
        this.pseudo         =       pseudo
        this.classe         =       classe
        this.sante          =        sante
        this.attaque        =      attaque
        this.niveau         =       niveau
}

    // methode :
    evoluer = function () {
        this.niveau++
    } 

    verifierSante= function(){
        if (this.sante <= 0){
            this.sante = 0;
            console.log(this.pseudo + " a perdu !")
        }
    }

    get informations() {
        return this.pseudo+" ("+ this.classe+") a "+ this.sante + " de points de vie et est au niveau " + this.niveau +".";

    }

}



//class magicien herite de la class Personnage
class Magicien extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau = 1){
        super(pseudo, classe, sante, attaque, niveau = 1)
        this.classe      =      "magicien"
        this.sante       =       170
        this.attaque     =       90
    }


// Attaque porté a personnage
    attaquer(personnage) {
        if(this.sante > 0){
            personnage.sante -=  this.attaque;
            //affichage
                console.log (this.pseudo+" attque "+ personnage.pseudo +"en lançant un sort ("+ this.attaque +" dégâts)");
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante()
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante)
        }
    }

    // Coups Special porté a personnage
    coupSpecial(personnage) {
        if(this.sante > 0){
            personnage.sante -= (this.attaque * 5);
            //affichage
            console.log (this.pseudo+" attque "+ personnage.pseudo +" Attaque avec son PUISSANCE DES ARCANES  ("+ this.attaque * 5 +" dégâts)");
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante();
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante);
        }
    }
}


//class guerrier herite de la class Personnage
class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau = 1){
        super(pseudo, classe, sante, attaque, niveau = 1)
        this.classe      =      "Guerrier"
        this.sante       =       350
        this.attaque     =       50
    }


    // Attaque porté a personnage
    attaquer(personnage) {
        if(this.sante > 0){

            personnage.sante -= this.attaque;
            //affichage
            console.log (this.pseudo+" attaque "+ personnage.pseudo +"un coup d'epée ("+ this.attaque +" dégâts)");
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante()
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante)
        }

    }

    // Coups Special porté a personnage
    coupSpecial(personnage) {
        if(this.sante > 0){
            
            personnage.sante -= (this.attaque * 5);
            //affichage
            console.log (this.pseudo+" attque "+ personnage.pseudo +" Attaque DOUBLE HACHE DE GUERRE ("+ this.attaque * 5 +" dégâts)");
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante();
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante);
        }
    }
}


//class Archer herite de la class Personnage
class Archer extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau = 1){
        super(pseudo, classe, sante, attaque, niveau = 1)
        this.classe      =      "Archer"
        this.sante       =       500
        this.attaque     =       30
    }


    // Attaque porté a personnage
    attaquer(personnage) {
        if(this.sante > 0){

            personnage.sante -= this.attaque;
            //affichage
            console.log (this.pseudo+" attaque "+ personnage.pseudo +"un coup de fleche ("+ this.attaque +" dégâts)");
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante()
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante)
        }

    }

    // Coups Special porté a personnage
    coupSpecial(personnage) {
        if(this.sante > 0){
            
            personnage.sante -= (this.attaque * 25);
            //affichage
            console.log (this.pseudo+" attaque "+ personnage.pseudo +" : \"I'AM THE BONE OF MY SWORD\" ("+ this.attaque * 25 +" dégâts)");
            console.log("OBLITERATION !!!")
            //on augmente le niveau de l'attaquant
            this.evoluer();
            //On verifie la santé de l'adversaire
            personnage.verifierSante();
            console.log(personnage.pseudo +" a maintenant "+ personnage.sante);
        }
    }
}

var davidCopperfield = new Magicien('David');
var zoulu = new Guerrier('Chakkazoulu');
var archer = new Archer('Shiro Emiya')

console.log(zoulu.informations);
console.log(davidCopperfield.informations);
davidCopperfield.attaquer(zoulu);
console.log(zoulu.informations);
zoulu.coupSpecial(davidCopperfield);
console.log(davidCopperfield.informations);
archer.coupSpecial(zoulu);

