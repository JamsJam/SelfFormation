// Declaration de 2 variables
let variableLet = "globale"
var variableVar = "globale"

if (true) {

    // Redeclaration des variables dans un bloc
    let variableLet = "locale"
    var variableVar = "locale"
    
//J'affiche les variable(dans le bloc) dans la console
console.log("let "+ variableLet) //affiche : let locale
console.log("var "+ variableVar) //affiche : var locale
}

//J'affiche les variable(hors du bloc) dans la console
console.log("let "+ variableLet) //affiche : let global --> la variable n'a pas ete ecraser et une nouvelle variable a été creer pour le bloc
console.log("var "+ variableVar) //affiche : var locale --> la premiere valeur a été ecraser