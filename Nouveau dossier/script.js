    
    // ************************* Variable
    
    var variable1 = "chaine de caractere";
    
    const variable3 = true;
    
    //  typeof() permet de retourner le type d'un element
    console.log(typeof(variable1)); // -> string
    console.log(typeof(variable2)); // -> number
    console.log(typeof(variable3));// -> boolean
    
    // ************************* Operateur

    // **** Comparateur

    let nombre1 = 35;
    let nombre2 = 135;
    let nombre3 = '135';
    

    // egalité
    console.log(nombre1 == nombre2) ;
    console.log(nombre3 == nombre2) ;
    // strict egalité : valeur et type
    console.log(nombre3 === nombre2); 
    
    // inegalité
    console.log(nombre1 < nombre2); // strictement inferieur
    console.log(nombre1 <= nombre2); // inferieur ou egale
    
    // operateur inverse
    console.log(nombre1 !== nombre2) ;
    console.log(nombre1 != nombre2) ;
    
    //efface la console
    console.clear();

    

    // ***** operateur logique

// condition if
let nb1 = 5
let nb2 = 7
let nb3 = 77

if ((nb1 == nb2 && nb1 == nb3) || nb2 == nb3 ) {
    // code qui s'executera si la condition est true
    console.log('vrai')
} else if(nb1 == nb3){
    let variable2 = 42;
    // code qui s'executera si la condition est false
    console.log('faux')
    
}

//switch case

let fruit = "banane"
switch (fruit) {
    case 'banane':
        // #code 1
        break;
    case 'ananas':
            
        // #code 2
        break;
    case 'pitaya':
        // #code 3
        break;

    default:
        break;
}

console.clear();
//  les tableaux (array)

// tableau simple
let array1 = [];
array1 = ['jaune', 'bleu', 'vert', 'violet', 'rose'];
console.log(array1[3]) // -> violet
//tableau multidimentionnel
let array2 = []
array2 = [
            ['facebook','mark zukerberg'], 
            ['Apple', 'Tim cook'], 
            ['Amazon', 'Jeff Besos']
        ]
console.log(array2[2][0])// -> amazon



console.clear()
// Boucle


// let i = 0
// // tant que i < nb1 alors.... 
// while (i <= nb1) {
//     //affiche i
//     console.log(i)
//     //incrementation 
//     i++
// }

// for (let index = 0; index < 0; index++) {
    
    
// }


// array.forEach(element => {
    
// });

for (const key in array1) {
    
        const element = array1[key];
        
    
}



// for (const element of object) {
    
// }



// ******* Fonction 


let btn = document.querySelector('#change')
let carre = document.querySelector('#carre') 
let itmsListe = document.querySelectorAll('.liste')

console.log(itmsListe)


function foo() {
    carre.style.backgroundColor = "tan"
    console.log(variable2)
}

btn.addEventListener('click',foo);

itmsListe.forEach(element => {
    
    element.addEventListener('mouseenter',() => {
        element.style.color = "red"
        element.style.backgroundColor = "green"

        element.style.transform = "rotate(360deg)"
        element.style.transition= "transform 1s ease-in-out"
        
    })
    element.addEventListener('mouseleave',() => {
        element.removeAttribute('style')
    })
});









