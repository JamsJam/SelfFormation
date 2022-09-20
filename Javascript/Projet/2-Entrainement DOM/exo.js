/*
    Pour réaliser cet exercice, vous allez devoir :

Supprimer le div avec l'id #a-supprimer

Créer un header

Créer un sous-header

Créer un paragraphe

Tout ceci dynamiquement grâce à JavaScript.

Retrouvez le code source de base en cliquant sur le lien, qui vous redirigera sur CodePen.



²Codes couleurs :
Je vous invite à vous lancer dans votre imagination, mais toutefois, 
je sais à quel point parfois, nous ne voulons pas nous prendre la tête ! 
Si vous le souhaitez, vous pouvez donc reprendre mes couleurs :

header - #e3b04b

sous-header - #f1d6ab
*/

//Supprimer le div avec l'id #a-supprimer
document.querySelector("#a-supprimer").remove();

//Créer un header
let header = document.createElement('header')

//Créer un sous-header
header.innerHTML = "<h1 id='titre'>Bienvenue</h1><div id='sousHeader'><a href='#'>accueil</a>/<a href='#'>Une autre page</a></div>"

document.body.append(header);



//Créer un paragraphe
let para = document.createElement('p');
para.textContent = 'ceci est un paragraphe';
document.body.append(para);


//personalisation
document.querySelector('header').style.backgroundColor = "#e3b04b";
document.querySelector('header').style.height = "105px";

document.querySelector('#titre').style.color = "#ffffff";
document.querySelector('#titre').style.textAlign = "center";

document.querySelector('#sousHeader').style.backgroundColor = "#f1d6ab";
document.querySelector('#sousHeader').style.height = "50px";







