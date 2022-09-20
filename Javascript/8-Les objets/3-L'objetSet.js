let nombres = [10, 45, 75, 10, 42, 45];



// let monSet = new Set[nombres];

// console.log(monSet )// 10, 45, 75, 42 --> Set va supprimer les valeur en double




let monSet = new Set();

//add pour ajouter une valeur dans un Set
monSet.add('87');
//la valeur ajouter peux etre de n'importe quel type
monSet.add(['mon','tableau', 'test']);
// delete(valeur) pour supprimer une valeur
monSet.delete('87');

console.log(monSet)
//.size pour voir la grandeur de l'objet Set
console.log(monSet.size)