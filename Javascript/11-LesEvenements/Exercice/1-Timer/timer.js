/*

Avant de commencer
Vérifiez que vous avez bien lié votre fichier html avec votre fichier JavaScript. 
Si vous le souhaitez, vous pouvez partir de  ce fichier CodePen créé pour l’occasion.



Etape 1
Créez un bouton, avec le texte « Lancer le décompte », dans votre page HTML.



Etape 2
Récupérez grâce à JavaScript, votre élément button, et stockez-le dans une variable btn.



Etape 3
Ajoutez un évènement sur votre bouton, qui se déclenchera au clic, et qui appellera la fonction start().



Etape 4
Créez une fonction start() qui aura pour but de créer une variable stockant un intervalle. 
Cet intervalle devra appeler une fonction decompte() toutes les secondes. 
Je vous conseille d’initialiser toutes vos variables à l’extérieur de vos fonctions pour pouvoir les utiliser partout
(hors, évidemment, la variable qui contient notre intervalle).



Etape 5
Créez une fonction decompte() qui décrémentera dans un premier temps la variable secondes. 
Créez cette variable en-dehors de votre fonction. Puis, vérifiez si secondes vaut 0. 
Si c’est le cas, appelez la fonction stop(), sinon, affichez dans la page HTML, grâce à JavaScript, 
le nombre de secondes restantes (par exemple, s’il reste 5 secondes, 
    écrivez « 5 » dans la page, à la suite des autres secondes, comme dans l’exemple ci-dessus).



Etape 6
Créez une fonction stop() qui arrêtera l’intervalle et qui se chargera d’écrire « Stop ! » dans la page.



Amusez-vous bien !


*/




let btn = document.querySelector('button')
let time = ""
let secondes = 10

btn.addEventListener('click',() =>{
    console.log('start')
    start()
})

function start() {
    time =  setInterval(() => {
            decompte(secondes)        
        }, 1000);
    }

function decompte(seconde) {
    if (seconde == 1) {

        let para = document.createElement('p');
        para.textContent = 'STOP !'
        document.body.append(para)
        stop()
    }else{
        
        --seconde
        let para = document.createElement('p');
        para.textContent = seconde
        document.body.append(para)
        return secondes = seconde
    }
}

function stop() {
    clearTimeout(time)
}

