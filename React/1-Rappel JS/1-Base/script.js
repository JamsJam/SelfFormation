//  ************************************************************le scoop (porté)

function foo(){
    // var x=5;

    
    if(true){
        let x = 5;
        // var x = 5;
    }
    console.log(x) // si let ->  undefine
                  // si var -> x == 5
    // var est "Function scoop" let est 'Block scoop'
}

// ************************************************************redeclaration

var x = 5
console.log(x) // 5
x = 10 
console.log(x) // 10
var x = 10; // redefinission !!! on ecrase la valeur de x !! A evité !!!

// ************************************************************Hoisting

//le fait d'appeler une fonction avant de la declarer. Ne marche pas avec la declaration de variable
fo()
function fo() {
    console.log("hello")
}


// ************************************************************window

var maVarX = 10;
console.log(window) //Permet d'avoir acces a tout les element de la fenetre avec VAR