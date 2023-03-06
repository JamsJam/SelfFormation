
//1 on stock l'URL qui sera utilisé avec AJAX
const url = 'https://blockchain.info/ticker';


// ************************* METHOD AVEC FETCH 
async function prixActualisé() {
    
    const requete = await fetch(url,{
        methode: 'GET'
    })
    
    // si la requete n'a pas aboutis....
    
    if (!requete.ok) {
        alert('un probleme est survenu')
    //si la requette a reussi
    
    } else{
        
        //je stock la reponse dans une variable
        
        let donnees = await requete.json()

        if(document.querySelector('span').textContent != donnees.EUR.last){
        document.querySelector('span').textContent = donnees.EUR.last
        console.log("actualisé");
        }
    }
}

let reload1s = setInterval(() => {
    prixActualisé()
},1000)
