// une fonction pur retourne la meme chose si on lui passe les meme argument et ne n'utilise pas d'element exterieur

let x = 2;


// cette fonction ne retourne pas la meme chose avec le meme argument et utilise un element externe
const add1 = y => x += y;

console.log(add1(2)) // 2
console.log(add1(2)) // 4
console.log(add1(2)) // 6
console.log(add1(2)) // 8
console.log(add1(2)) // 10



// fonction pur
const add2 = (a,b) => a + b ;

console.log(add2(2,2)) // 4
console.log(add2(2,2)) // 4
console.log(add2(2,2)) // 4
console.log(add2(2,2)) // 4
console.log(add2(2,2)) // 4