
//je selectionne le titre.....
let h1 = document.querySelector('h1');

//...je l'affiche dans la console
console.log(h1);


//Modofir le texte er uniquement le texte
h1.textContent = "hello World !";

console.log(h1);



//modifie l'HTML dans les balises
h1.innerHTML = "<span style='color:red'>Miaou</span> World !";

console.log(h1);

//https://developer.mozilla.org/fr/docs/Web/API/Element toute les proprieter existante pour le dom ici