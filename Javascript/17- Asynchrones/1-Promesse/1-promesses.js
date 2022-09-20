//  Les promesses ont 3 etas possibles
//  en cours/ honorés/rompus

const unePromesse = new Promise((resolve, reject) => {
    // #tache qui s'effectue en asynchrone


    // promesse honoré : resolve()




    // promesse rompu : reject()



}) 

function chargerScript(script) {
    return new Promise((resolve, reject) => {
        
        let element = document.createElement('script');
        element.src = script +'.js';
        document.head.append(element)

        element.addEventListener('load', () => {
            resolve('fichier ' + script + ' a été chargé')
        })

        element.addEventListener('error', () => {
            reject('Opperation impossible! Le fichier ' + script + ' n\'a pas été chargé')
        })
    })
}

const promesse = chargerScript('leScript')

promesse.then(
    function(result){
        console.log(result)
    },

    function(error){
        console.log(error)
    }
)