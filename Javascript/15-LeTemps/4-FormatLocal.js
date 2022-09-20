let dateActuelle =  new Date();


//toLocaleDateString = jour, moi, année
//leLocaleTimeString = l'heure
//LoLocaleString  = jour, mois, année, heure
//on choisis les option qu'on veux

let dateLocal = dateActuelle.toLocaleString('fr-FR', {

    weekday: 'long', //short(3 premieres lettres), narrow ( premiere lettre), long(en toute leletre)
    year: 'numeric',// nemeric(xxxx), 2-digit (xx)
    month:'long',//short(3 premieres lettres), narrow ( premiere lettre), long(en toute leletre)
    day: 'numeric',// nemeric(xxxx), 2-digit (xx)
    hour: 'numeric',// nemeric(xxxx), 2-digit (xx)
    minute: 'numeric',// nemeric(xxxx), 2-digit (xx)
    second: 'numeric'// nemeric(xxxx), 2-digit (xx)
    
})

console.log(dateLocal)