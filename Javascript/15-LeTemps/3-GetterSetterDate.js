let dateActuelle = new Date();

console.log(dateActuelle.getFullYear())
console.log(dateActuelle.getDay()) // getDay donne le jours de la semaine  sachant que la semande commence a dimanche et commence a 0
console.log(dateActuelle.getDate()) // getDate donne le jours d'aujourd'hui


dateActuelle.setFullYear(4256)
console.log(dateActuelle)



console.log(dateActuelle.getUTCDay())