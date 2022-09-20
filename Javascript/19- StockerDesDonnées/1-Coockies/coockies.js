//Creer un cookies
document.cookie = "prenom=jhon"

//afficher tout les coockies
alert(document.cookie)

//modifier un cookie
document.cookie = 'prenom=Mark'

// supprimer un cookie
document.cookie = 'prenom='

// option 


// option path=/ => sur quel pertis du site le cookie est disponible
document.cookie = 'prenom=John; path=/admin'

// option domain=  => sur quel site le cookie est disponible
document.cookie = 'prenom=John; path=/admin, domaine=jamdev.fr';

// expire=  => permet de donner une date d'expiration au cookie (ici 1 ans)
let date = new Date(Date.now() + 31560000000)
date = date.toUTCString();
document.cookie = 'prenom=John; path=/admin, domaine=jamdev.fr, expires=' + date;


// max-age=  => idem que expire
document.cookie = 'prenom=John; path=/admin, domaine=jamdev.fr, expires=31560000000';


//secure => permet que ce cookie soit utilisable sur les site https
document.cookie = 'prenom=John; path=/admin, domaine=jamdev.fr, expires=31560000000';