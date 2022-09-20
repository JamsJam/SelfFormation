


//Constructeur principale => Animal (nombreDePattes, poid)
function Animal(nombreDePattes, poid) {
    this.nombreDePattes     =       nombreDePattes;
    this.poid               =       poid;
}
//Cette methode estt definit dans le prototype de Animal pour faire heriter la methode
Animal.prototype.presentation = function(){
    console.log('cet animal possege ' +this.nombreDePattes+' pattes et pèse '+this.poid)
}





//oiseau (nombreDePattes, poid, longueurDesAilles)
function Oiseau(longueurDesAilles, nombreDePattes, poid){
    // Cette fonction permet d'heriter les proprieter de Animal
    Animal.call(this, nombreDePattes, poid)
    
    this.longueurDesAilles = longueurDesAilles
}
// Permet d'utiliser les methodes presentes dans le prototypre de Animal 
Oiseau.prototype = Object.create(Animal.prototype)
Oiseau.prototype.constructeur = Oiseau




//mamifere (nobPattes, poid, TypeDePoil)
function Mammifere(TypeDePoil, nombreDePattes, poid){
    // Cette fonction permet d'heriter les proprieter de Animal
    Animal.call(this, nombreDePattes, poid)
    
    this.TypeDePoil = TypeDePoil
}
Mammifere.prototype = Object.create(Animal.prototype)
Mammifere.prototype.constructeur = Mammifere

var perroquet = new Oiseau("20cm", 2, "3kg")
console.log(perroquet)
perroquet.presentation()

