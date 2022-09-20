// ***************** Spread Operator

const arr = [1,2,3]

console.log(arr) // [1,2,3]
console.log(...arr) // 1 2 3   le ...  est un spread operator

const arr2 = [...arr, 4]
console.log(...arr2) // 1 2 3 4



const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

const myObj2 = {
    ...myObj,
    d:4

}

// ************** Rest opperator

function foo (...args){  // permet d'avoir un nombre indefinit de variable

    console.log(args) // retourne un tableau de tout les arguments [2+3+5+6]
    let result = 0;

    for (const arg of args) {
        result += arg; // additionne tout les argument de la fonction

        return result
    }
}

foo(2,3,5,6) // 2+3+5+6 = 16