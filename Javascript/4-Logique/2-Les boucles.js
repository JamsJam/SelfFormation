// ***************************************************************Boucle while


let i = 0;
// tant que la condition est verifier , la boucle continue
while (i < 8){

    console.log("Ligne : " + ++i) //incrementation de i pour sortir de la condition a un moment donner
}









// ***************************************************************Boucle Do.....while


let prenom 

do {

    prenom = prompt("quels est votre prenom ?")

} while (prenom = "" || prenom ==null);

alert("bonjour "+prenom)










/* *************************************************************** autre boucle :

Certains d'entre-vous se demandent peut-être pourquoi je ne parle pas des boucles suivantes :

for...in

for...of

foreach

Il s'agit de boucles qui vont être utilisées pour parcourir des objets. Nous n'avons pas encore vu cette notion, nous parlerons donc de ces boucles lorsque nous aborderons les objets, don't panic !

Je vous attends dans la prochaine session, on va casser nos boucles !




*/
















// *************************************************************** Casser une boucle




// break        --> casse la boucle et en sort
// continue     --> permet de passer a l'iteration suivante de la boucle








// *************************************************************** Les exeptions


try {
    // Erreur ?
    //Verifie si il y a une erreur ans le block....
    let recompense = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;
    
    switch(recompense) {
        case 'épée':
            degats = 40;
            break;
        case 'arc':
            degats = 30;
            break;
        case'haches':
            degats = 20;
            break;
        default:

        //.....creer un objet error si resultat inatendu..... 
        throw new Error('Vous ne pouvez pas tricher.');
    }
    
    alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
  }
  catch(error) { // --> recupere l'objet erreur pour l'afficher
    // Erreur !
    alert(error);
  }
  //S'executera toujour , erreur ou non
  finally {
    alert('Fin du programme');
  }