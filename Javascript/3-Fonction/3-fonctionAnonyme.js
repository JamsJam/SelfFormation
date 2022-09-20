/* 
Un fonction anonyme n'a pas de nom
il y  a plusieux moyen de l'excecuter

*/

// n°1 : stocker la fonction dans une variable :


let fonctionAnonyme = function() {

    console.log("je suis une fonction anonyme dans une variable");
}

fonctionAnonyme()


// n°2 : l'auto-executer :

//cette ecriture permet d'indigquer au navigateur que la fonction doit s'executer immediatement
(function() {console.log("je suis une fonction anonyme auto-executer")})()

// n°3 : Grace a un evenement ( sera vu plus tard)

