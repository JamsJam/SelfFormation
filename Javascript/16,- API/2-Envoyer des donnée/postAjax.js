const url = 'https://lesoublisdelinfo.com/api.php'

let requete = new XMLHttpRequest();

//Requete GET

// requete.open('GET', url);
// requete.responseType= "json";
// requete.send();


//Requete Post

requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.responseType= "json";
requete.send('prenom=Pelo');

requete.onload = function () {
    
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response
            console.log(reponse) // {
                                    // "prenom": "anonyme",
                                    // "resultat": "Bonjour anonyme ! Voici la requête AJAX !"
                                    // }
                
        } else {
            alert('Un probleme est survenu')
        }
    } else {
        
    }
}