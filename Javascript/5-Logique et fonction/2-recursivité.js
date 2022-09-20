/* Avec une fonction recurcive je peu rappeler ma fonction autant que necessaire 
la fonction va s'appeler elle meme
*/

function timer(secondes){

    if (secondes > 0){
        console.log(secondes)
        timer (secondes - 1)
    }else{
        console.log(secondes)
    }
}
timer(10);


/*
    Dans cet exercice, j'aimerai que vous me créiez une fonction somme qui calculera la somme des nombres en partant de 1 jusqu'au nombre que nous lui donnerons en paramètres.

Par exemple, si je donne 5 en paramètres, alors ma fonction devra me calculer 5 + 4 + 3 + 2 + 1. Notre fonction devra donc nous retourner 15.

Si vous réussissez cet exercice, vous pourrez être sûr d'avoir compris le principe des fonctions récursives ! 
N'hésitez pas à vous aider de la session précédente, dans laquelle nous créons notre timer, ceci vous aidera beaucoup !

Bon courage, et amusez-vous bien !
*/

function somme(nombre) {
    
    if (nombre <= 1){

        return 1
    }
    else{
        return nombre + somme(nombre - 1);
        
    }
}
console.log(somme(6));