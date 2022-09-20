
let h1 = document.querySelector('h1');

//Ajouter un element brut
h1.append('test');




// *********************** ajouter un objet

// 1) je creer l'element..... :

let helloWorld = document.createElement('div')




// 2) .....je le personnalise..... :

helloWorld.textContent = "Hello Wordl !"






// 3)  puis je l'ajoute a la page :

//4 possibilité :
    //1
    // document.body.append(helloWorld) //ajoute un element apres le body
    // document.body.appendChild(helloWorld) // Impossible de mettre du text mais un objet

    // document.body.insertBefore( //je met helloworld avant le container
    //     helloWorld, 
    //     document.querySelector('.container')
    // )
    
    document.querySelector('.container').prepend(helloWorld) //je met helloworld avant le container
    