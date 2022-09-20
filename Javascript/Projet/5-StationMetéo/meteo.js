// key : da42bd60bb2053c9183857989293aff8
let ville = "Kyoto"
let APIkey = 'da42bd60bb2053c9183857989293aff8'


function meteo(lieu) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${lieu}&appid=${APIkey}&units=metric`
    
    requete = new XMLHttpRequest
    requete.open('GET', url);
    requete.responseType = 'json'
    requete.send();
    
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            
            if (requete.status === 200) {
                
                let reponse = requete.response
                console.log (reponse)
                
                document.querySelector('#ville').textContent = lieu
                document.querySelector('#temperature_label').textContent = reponse.main.temp
                
                document.querySelector('#changer').addEventListener('click',() =>{
                    let villeChoisis = prompt('choisissez une ville');
                    meteo(villeChoisis)
                })
                
            } else {
                alert("Un probleme est survenue")
            }
        }
    }
}

meteo(ville);