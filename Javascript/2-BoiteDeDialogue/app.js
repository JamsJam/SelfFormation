//*******************************************************Afficher une information */



alert('message')
//permet d'afficher une info hors de la page,
//la fonction alert() necessite un message a afficher




//*******************************************************Demander une confirmation */


// confirm('souhaitez vous confirmer ?')
//permet d'afficher une boite de dialogue qui demande une confirmation

if(confirm('souhaitez vous confirmer ?')){
    alert('ok');
// si le user repond oui
}
else{
    alert('annuler')
    // si le user repond non
};


//******************************************************* Demander une information a l'utilisateur */

//                  prompt('message')  ----> affiche une boite de dialogue avec un champs texte  a remplir par l'utilisateur



//                      Challenge : Stocker dans une variable l'age de l'utilisateur et le lui afficher sous la forme d'une phrase

const age = prompt('quel est votre age ?');

console.log("vous avez "+age+" ans.")
