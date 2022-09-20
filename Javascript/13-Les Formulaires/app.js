// Etape 1 - Sélectionner nos éléments
let input       =   document.querySelector('#prix');
let error       =   document.querySelector('small');
let formulaire  =   document.querySelector('#formulaire');
let tentative   =   0
let nombreChoisis


// Etape 2 - Cacher l'erreur
error.style.display = "none"

// Etape 3 - Générer un nombre aléatoire
nombreAleatoire = Math.floor(Math.random() * (1000))


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',() => {

    // si la valeur n'est pas un nombre on affiche le message d'erreur sinon on le masque
        if(isNaN(input.value)){
            error.style.display = "inline"
        }else{
            error.style.display = "none"
        }
    })

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit',(e) =>{

//on annule le comportement par defaut du submit (rechargement et envoie des donnée)
    e.preventDefault()

// on verifie que l'utilisateur donne bien un nombre
    if(isNaN(input.value) || input.value == "" || input.value > 1000 || input.value < 0){
        input.style.boxShadow= "0 0 0 0.2rem #ff23236b"
        error.style.display = "inline"
    }else{

    // on incremente le nombre de tentative
        tentative++
        input.style.boxShadow= "0 0 0 0.2rem silver"

    // on enregistre le nombre du User
        nombreChoisis = input.value

    // Reinitialisation de l'input
        input.value = ""
    }
    verifier(nombreChoisis)
}
)

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {

    let instruction = document.createElement('div')
    // Si le nombre trop grand
    if (nombre > nombreAleatoire){

        instruction.textContent = "#"+ tentative+" ("+ nombreChoisis +") C'est moins !"
        instruction.className = "instruction moins"

    }
    //si le nombre est trop petit
    else if (nombre < nombreAleatoire){

        instruction.textContent = "#"+ tentative+" ("+ nombreChoisis +") C'est plus !"
        instruction.className = "instruction plus"

    }
    //Si le nombre est le bon
    else if (nombre == nombreAleatoire){

        instruction.textContent = "#"+ tentative+" FELICITATION ! C'est le juste prix !"
        instruction.className = "instruction fini"
        input.disabled = true
        document.querySelector('button').style.display = 'none'
    }
    
    document.querySelector('#instructions').prepend(instruction)
}