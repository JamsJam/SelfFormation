
//1 on stock l'URL qui sera utilisé avec AJAX
const url = 'https://blockchain.info/ticker';


async function prixActualisé() {
    
//     //2 creer une requete
//     let request = new XMLHttpRequest();
//     request.open('GET',url)//premier parametre GET/POSTE, deuxieme^argument  URL

//     request.responseType= "json"; //Nous attendont du json
//     request.send() //nous envoyons nps requette 

//     //des qu'on recoit une reponse, on execute une fonction

//     request.onload = function () {

//         //Lorsque la requete est faite....
//         if(request.readyState === XMLHttpRequest.DONE){
//             if(request.status !== 200){
                
//                 alert('Un probleme est survenue, veillez revenir plus tard');
                
//                 //......si la page est parfaitement afficher (erreur 200 = success)......
//             }else{
//                 //...on stock la reponse
//                 let reponse = request.response
//                 let prix = reponse.EUR.sell
//                 // console.log(`la derniere vente de bitcoin en euro s'est vendu :${prix} €`)
//                 document.querySelector('#price_label').textContent = prix
//             }

//         }
        
//     }
// }







    const requete = await fetch(url,{
        methode: 'GET'
    })

    if (!requete.ok) {
        alert('un probleme est survenu')
    } else{
        let donnees = await requete.json()
        document.querySelector('span').textContent = donnees.EUR.last
    }
}

let reload5s = setInterval(() => {
    prixActualisé()
},1000)