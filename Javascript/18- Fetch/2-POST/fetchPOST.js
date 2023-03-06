const url = 'https://lesoublisdelinfo.com/api.php'



// ***************************************************************************Fetch

async function envoyerPrenom(prenom) {
    
    const requete = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams ({
            prenom
        })
    });


    if (!requete.ok) {
        alert('une erreur est survenue')
    } else {
        const donnees = await requete.json()
        console.log(donnees)
        
    }

}

envoyerPrenom('Bart');