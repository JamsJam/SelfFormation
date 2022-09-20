
/* **************************************** condition : If --> else


LES OPERATEURS DE COMPARAISION :




== : égal à la valeur
=== : égal à la valeur et au type
!= : différent de la valeur
!== : différent de la valeur et du type
> : supérieur
< : inférieur
>= : supérieur ou égal    
<= : inférieur ou égal

*/

if (true) {
    // code executé si et seulement si la condition (entre parenthese) est renvoi true
} else {
    // code executé si et seulement si la condition (entre parenthese) est renvoi false
}

//Exemple

let heure = 11;

/*
heure = 12 --> heure prend la valeur 12
heure == 12 --> heure est egale a 12
heure === 12 --> heure est strictement egale a 12 (meme valeur et meme type)
heure != 12 --> heure est strictement different a 12 
heure !== 12 --> heure est strictement different a 12 (differente valeur et differente type)
heure < 12 --> heure est strictement inferieur a 12 
heure <= 12 -->heure est inferieur ou egale a 12 
*/

if (heure < 12) {
    console.log("c'est le matin")
    
} else {
    
    console.log("c'est l'apres-midi")
    
}









/* **************************************** condition : switch


*/

let consommable = "carotte"

//Le switch va surveiller ici la variable "consommable" et on va determiner des action dans des cas bien specifiques
switch (consommable){
    
    //dans le cas ou la variable est egale a "banane"
    case "banane" :

        console.log("ceci est un fruit");
        // nle 'break' est important pour sortir du switch sinon il continue de lire le code
        break;
        


    //il est possible de verifier plusieurs condition qui ont la meme issu comme ceci
    case "courgette":
    case "tomate":
    case "carotte":
        console.log("ceci est un legume");
        
        break; 
    //default permet d'excecuter un code si aucun condition n'est remplis
    default:
        console.log("ceci n'est ni un fruit ni un legume")
        break

}









/* **************************************** Verifier plusieus condition d'un coups 

&& = et
|| = ou
! = not ( le contraire de la condition)


*/
let chauffer = ""
let gareDeDepart = prompt("ou souhaitez vous aller ?") || "gare du nord"; //--> si la valeur du promt pt est null alors la bvaleur par defaut sera "gare du nord"
let gareDeDArrivee = "Gare du Nord";

// la condition ici : 1) si au moins la gare de depart ou la gare d'arrivé est definit --> 2) si il y a un chauffeur
if ( (gareDeDepart != "" || gareDeDArrivee != "" ) && chauffer != "") {
    console.log("le train ca arrivé")
} else{
    "Le train ne peux pas demarrer a destination de "+gareDeDArrivee
}


let x = 7;
let y = 7;

if (x < 10){
    console.log("x est inferieur a 10")
}


// le "!" inverse la condition. ici on verifie si y n'est pas inferieur a 10
if (!y < 10){
    console.log("y est n'est pas inferieur a 10")
}










/* **************************************** Condition ternaire */

let a = 5;


[CONDITION] ? [TRUE] : [FALSE] ; // --> syntaxe d'(une condition ternaire)



// if(a > 3 ){
//     console.log('a est superieur a trost');

// }else {
//     console.log('a est inferieur à trois');
// }

a > 3 ? console.log('a est superieur a trois') : console.log('a est inferieur à trois')