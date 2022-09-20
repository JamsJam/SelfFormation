// Une fonction d'ordre superieur retourne une autre fonction et/ou a une fonction en paramettre 
const rawArr = [5, 6, 5889, 52, 415, 120];
const newArr = [];

for(let i = 0; i < rawArr.length; i++){

    if(rawArr[i] > 200){
        newArr.push(rawArr[i]);
    }

}
console.log(newArr);

function supArr(arr, fn){
    const newArr = [];
    
    for(let i = 0; i < rawArr.length; i++){

        if(fn(arr[i])){
            newArr.push(rawArr[i]);
        }
    }
    return newArr
}

const arrSup100 =  supArr(rawArr, (item) => {if (item >= 100) { 
    return item
}})


