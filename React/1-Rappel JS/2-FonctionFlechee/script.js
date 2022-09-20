const add = (a,b) => {  // const add = (a,b) => a+b ;
    return a+b;
}
console.log(add(2,2)) //4




const myObj = {
    a: 5,
    foo(){
        console.log(this) // this fait reference a l'objet myObj
        console.log(this.a) // 5
        console.log(this.a) // si foo est une fonction fleché : undefine
    }// avec une fonction fleché, this fait reference a windows
}

myObj.foo() // methode (une fonction dans un objet)
