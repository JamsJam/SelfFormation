let variableLet = "globale"
var variableVar = "globale"

if (true) {


    let variableLet = "locale"
    var variableVar = "locale"

console.log("let "+ variableLet) //let locale
console.log("var "+ variableVar) //var locale
}

console.log("let "+ variableLet) //premiere variable a let global --> la variable n'a pas ete ecraser et une nouvelle variable a été creer pour le bloc
console.log("var "+ variableVar) //var locale --> la premiere valeur a été ecraser