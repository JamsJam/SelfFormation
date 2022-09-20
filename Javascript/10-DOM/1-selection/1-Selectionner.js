
//Selection d'element par le nom de la balise
let header = document.getElementsByTagName('header');


//Selection d'element par l'identifiant
let logo    = document.getElementById('logo');

//Selection d'element par la class
let container   = document.getElementsByClass('container');

console.log(header)
console.log(logo)
console.log(container)


// Selection universel 
let laTag = Document.querySelectorAll('p')
let lId = Document.querySelectorAll('#logo')
let laClass = Document.querySelectorAll('.container')