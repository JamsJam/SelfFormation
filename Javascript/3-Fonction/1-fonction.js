
//******************************************************************Les fonction

// Pour creer une fonction on utilise le mot clé 'function'
// Le nom de la fonction (direBonjour) permet de l'identifier. Le nom est ecrit en camelCase ( premiers mot en minuscule et premiere lettre de chaque nouveau mot en majuscule)
// function direBonjour() {
//     alert('Bonjour User')
// }

// //cette fonction n'est pas executer a l'etat. elle est seulement creer.

// // si la page se charge.....
// window.addEventListener('load',

// //j'execute ma fonction
// direBonjour()
// )


//******************************************************************La structure des fonctions


//voila la structure d'une fonction.
//name -> le nom de la fonction qui permettrra de l'appeler plus tard. ! une fonction peut etre anonyme !
//params, le paramettre de la fonction. il peu y en avoir plusieurs. c'est une variable qui sera modifier par la fonction et lui servira a s'executer.


function name(params) {
    // # code
}
//exemple : 

function addition(nb1,nb2)  { // la fonction addition demande pour fonctionner 2 paramettre (nb1 et nb2) qui seront additionner.

    console.log (nb1 + nb2)

}

addition(5,6.8) // lorsque j'appel ma fonction, je mets la valeur des argument(ou paramettez) dans les parenthese dans l'ordre de declaration

// Recreons la fonction direBonjour avec un paramettre.

// Je creer ma fonction avec un paramettre appeler "message"
function direBonjours(message) {

    //je remet mon paramettre a sa place dans la fonction: 
    alert(message) // ---> le message sera afficher dans l'alerte
    
}

