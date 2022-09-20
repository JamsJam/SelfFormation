const pays = {
    nom: "italie",
    pop: 60
}


// const {nom,pop} = pays


//attend un objet et la transforme la proprieter nom en variable qui contient sa valeur le tout stoqué dans le nom de l'objet
const data = ({nom, pop}) => nom;
console.log(data(pays)); // italie



const arr = [1,2,3]

const [a,b,c] = arr
console.log(a,b,c) // 1 2 3