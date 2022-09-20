//***************************************  Le Scoop (ou la porté d'une variable)






let crie ; // Variable globale (definie a la racine ) donc utilisable partout sur la page

function crieDeGuerre() {

    crie = "EN AVANT !!"; // Affiche une erreur a la ligne 20 car "crie" est une variable local (limité a la fonction ou elle est definie)


    console.log(crie)
    
}

crieDeGuerre(); // affiche en sortie : EN AVANT !!
console.log(crie); // Affiche une erreur car cri est une variable local (lomité a la fonction ou elle est definie)











// ********************************************************** Les fonction qui retourne quelquechose

let nb1 = 4, nb2 = 7;

//exercice : faire une fonction qui additionne nb1 et nb2

function addition(nombreA, nombreB) {
    
    let result = nombreA + nombreB
    // console.log(nombreA + nombreB) // --> sert a afficher quelquechose
    
    return result // 11
    //le code apres un "return" dans une fonction n'est apas executer
    // !!!! Le return n'affiche pas mais il donne un resultat en sortie qui peut etre reutiliser en appelant la fonction  avec les paramettre!!!!
    
}

console.log(addition(nb1, nb2))










// ********************************************************** Les paramettres par defaut


let preparation = 10, cuisson = 15;

//exercice : faire une fonction qui additionne preparation et cuisson

function cuisiner(nombreDeGateau, minuteDePreparation = preparation, minuteDeCuisson = cuisson) //--> il est possible de definir les paramettre ici et dans ce cas ils seront defini par defaut
{
    
    let resultat = nombreDeGateau * (minuteDePreparation + minuteDeCuisson)
    
    
    return resultat // 11
    
    
}
let tempsDePreparationGateauAuChocolat = cuisiner(5) //--> Si on ne change pas les paramettre par defaut, on n'a pas besoin de les indiquer.
let tempsDePreparationFraisier = cuisiner(5, 20) // si on veux une valeur differente, on specifie.



console.log("le temps De Preparation d'un Gateau Au Chocolat est de "+ tempsDePreparationGateauAuChocolat+" minutes");
console.log("le temps De Preparation d'un Fraisier est de "+tempsDePreparationFraisier+" minutes");













// ********************************************************** Conversion de type de donnée


// Exercice
let age;

function demanderAge()
{
    age = prompt('Renseigner votre age');
    alert("Vous avez "+age+" ans")
}

demanderAge()




function prevoirAge()
{
    


    alert("Vous aurez bientot "+ age+1 +" ans") // Vous aurez bientot 301 ans --> Le resultat d'un prompt est forcement une chaine de caractere donc il concatene "30" avec le chiffre 1
                                                // il faudra donc changer le type de age
}

prevoirAge()


//differente methode pour changer le type de ma variable
function prevoirAge1()
{
    // age = parseInt(age) // transforme la variable age en un nombre entier (sans virgule)
    // age = parseFloat(age) // transforme la variable age en nombre a virgule
    age = Number(age) // transforme la variable age en nombre (entier ou a virgule)



    alert("Vous aurez bientot "+ age+1 +" ans")  // Vous aurez bientot 31 ans

}

prevoirAge1()


//Maintenant on veux retransformer la variable en chaine de caractere (ou String)
function prevoirAge2()
{

    age = age.toString(0) 

    alert("Vous aurez bientot "+ age+1 +" ans") //Vous aurez bientot 301 ans

}

prevoirAge2()