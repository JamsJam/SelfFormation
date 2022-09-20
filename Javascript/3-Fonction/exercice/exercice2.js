/*
    Dans cet exercice, je vous propose de réutiliser tout ce que nous avons vu jusqu'à maintenant. 
Si vous le réussissez, vous pourrez définitivement valider toutes les notions que nous avons déjà vu ensemble !


Voici ce que nous allons faire : un calculateur d'IMC !

Nous allons récupérer deux valeurs grâce à notre utilisateur : 
poids et taille, qui seront respectivement associées au poids et à la taille de notre utilisateur. 
Vous pouvez demander à vos utilisateurs leur taille en centimètres ou en mètres. 
Dans tous les cas, vous devrez convertir cette taille en mètres pour calculer son IMC.

Il faudra ensuite passer ces valeurs à notre fonction, grâce à ses paramètres. J'insiste sur ce point.

Dans cette fonction calculerIMC nous aurons une formule mathématique, que je vais vous donner car il n'y a pas d'intérêt à la chercher :
*/

function calculImc(lePoid, laTaille) {

    let imc = lePoid / laTaille**2;
    
    return imc;
}

let poid = Number(prompt("inserer votre poid"));

let taille = math.pow(Number(prompt("inserer votre taille en metre")),2) ;

alert("Votre IMC est de : "+calculImc(poid, taille));

//correction : https://codepen.io/believemy/pen/wvvLLOe