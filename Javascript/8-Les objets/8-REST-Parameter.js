// function additions(nombreA, nombreB) {
    
//     let resultat = nombreA + nombreB
//     console.log(resultat)

// }


// le rest parametteur permet de donner un nilbre infini d'argument
function additions(...nombres) {
    
    let resultat = 0


    nombres.forEach(nombre => {
        resultat += nombre,
        console.log(nombre);
    })

}

