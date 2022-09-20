function chargerScript(script) {
    return new Promise((resolve, reject) => {
        
        let element = document.createElement('script');
        element.src = script +'.js';
        document.head.append(element)

        element.addEventListener('load', () => {
            resolve('fichier ' + script + ' a été chargé')
        })

        element.addEventListener('error', () => {
            reject(new Error('Operation impossible! Le fichier ' + script + ' n\'a pas été chargé'))
        })
    })
}

async function resultat() {
    try {
        const scriptA = await chargerScript('test');
        console.log(scriptA)
        const scriptB = await chargerScript('scriptB');
        console.log(scriptB)
    } catch (error) {
        
        console.log(error)
        document.head.lastChild.remove()
    }
}

resultat()







// ****************************************** Async et Await sont des "sucres syntaxiques"

//le async permet a la fonction d'obligatoirement retourner une Promesse
// async function direBonjour() {
    
//     const promesse = new Promise((resolve, reject) => {
        
//         setTimeout(() => resolve ('Promesse tenue !'), 3000);
//     })

    
//     let resultat = await promesse
//     console.log(resultat)
    

// }

// direBonjour()
