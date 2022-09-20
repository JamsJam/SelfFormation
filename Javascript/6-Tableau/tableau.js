// ******************************************************************************** Faire un tableau simple


let oldMonTableau1 = new Array('un', 'deux', 'trois');



let oldMonTableau2 = Array('un', 'deux', 'trois');


// Meilleur pratique !!
let monTableau = ['un', 'deux', 'trois'];










// ******************************************************************************** Faire un tableau a plusieurs dimention

let OldMonTableau2D = new Array(
    'un',
    Array('Mark','Jeff','bill'),
    Array('Zukerberg', 'Dezos', 'Gates')
);



//plus simple et plus actuelle
let monTableau2D = [
    'un',
    ['Mark','Jeff','bill'],
    ['Zukerberg', 'Dezos', 'Gates']
];









// ******************************************************************************** Faire un tableau associatif


let monTableauAssociatif = {
    'prenom'  : 'Mark',
    'nom'     : 'Zukerberg',
    'poste'   : 'PDG'
}









// ******************************************************************************** Acceder aux elements


// Tableau simple :

console.log(monTableau[0])


// Tableau a plusieud dimention :

console.log(monTableau2D[1][0])


// Tableau simple :

console.log(monTableauAssociatif['nom'])


//le '.length' permet de recuperer la taille du tableau
console.log(monTableau.length)















// ******************************************************************************** Ajouter un element


monTableau = ['un', 'deux', 'trois'];


monTableau2D = [
    'un',
    ['Mark','Jeff','bill'],
    ['Zukerberg', 'Dezos', 'Gates']
];


monTableauAssociatif = {
    'prenom'  : 'Mark',
    'nom'     : 'Zukerberg',
    'poste'   : 'PDG'
}




// *************** ...A  la fin 

// 'push' permet d'ajouter un element a la fin d'un tabeau simple
monTableau.push('quatre');
console.log(" 'push' permet d'ajouter un element a la fin d'un tabeau simple -->" + monTableau);

// 'push' permet d'ajouter un element a la fin d'un tabeau a plusieurs dimension en indiquand l'index du tableau visé
monTableau2d[1].push('quatre');
console.log(" 'push' permet d'ajouter un element a la fin d'un tabeau simple en indiquand l'index du tableau visé -->" + monTableau2D);







// *************** ...Au debut

// 'unshift' permet d'ajouter un element au debut d'un tabeau simple
monTableau.unshift('zero');
console.log(" 'unshift' permet d'ajouter un element au debut d'un tabeau simple -->" + monTableau)

// 'unshift' permet d'ajouter un element au debut d'un tabeau a plusieurs dimension en indiquand l'index du tableau visé
monTableau2d[1].unshift('quatre');
console.log(" 'unshift' permet d'ajouter un element au debut d'un a plusieurs dimension en indiquand l'index du tableau visé -->" + monTableau2D);



// *********************** Cas du tableau associatif :

monTableauAssociatif['nationalité'] = 'USA'
console.log("pour ajouter un element dans un tableau associatif, il faut lui donner un nom et une valeur --> "+ monTableauAssociatif)





// ******************************************************************************** Supprimer un element


//pour supprimer un element au debut d'un tableau : .shift
//pour supprimer un element a la fin d'un tableau : .pop
//pour supprimer un elementd'un tableau tableau associatif :  delete(tableau.nom)











// ******************************************************************************** Les boucles for...in et for....of

let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc']

// une boucle for...in renvoie l'index dans sa variable

// chaque element, je cree une constante pays qui contien l'index de cette element et j'execute mon code
for (const pays in listeDePays) {
    console.log(pays) //0,1,2.....
    console.log(listeDePays[pays]) //'France', 'Belgique', 'Japon', 'Maroc'
}


// une boucle for...of renvoie la valeur dans sa variable

for (const pays of listeDePays) {
    
    console.log(pays) //'France', 'Belgique', 'Japon', 'Maroc'
}

// ******************************************************************************** Les boucles forEach

listeDePays.forEach((pays) => {
    console.log(pays) //'France', 'Belgique', 'Japon', 'Maroc'
})










