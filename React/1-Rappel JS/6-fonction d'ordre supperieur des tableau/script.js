const arr = [1,2,3,4,5,6];

const mapedArr = arr.map(x => x + 10);

console.log(mapedArr) // [11,12,13,14,15,16]

const filteredArr = arr.filter(num => num > 2);
console.log(filteredArr) // [1]