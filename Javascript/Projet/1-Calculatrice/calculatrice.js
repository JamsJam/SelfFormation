
let restart;
let choix;
let premierNombre ;
let deuxiemeNombre;
let resultat;

do {

    do {
        
        choix = prompt("Choisir un mode : \n\n 1-Addition \n 2-Soustraction \n 3-\Multiplication \n 4- Division")

    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4 );




    do {
        
        premierNombre   = prompt("choisissez le premier nombre")
        deuxiemeNombre  = prompt("choisissez le deuxieme nombre")
        
    } while (isNaN(premierNombre) && isNaN(deuxiemeNombre));



    function addition(a,b){
        
        
        return resultat = Number(a) + Number(b);
    }



    function soustraction(a,b){
        
        
        return resultat = Number(a) - Number(b);
    }



    function multiplication(a,b){
        
        
        return resultat = Number(a) * Number(b);
    }



    function division(a,b){
        
        
        try {
            if (b == 0) {
                
                throw new Error("Impossible d'executer une division par 0");
                
            } else {
                
                return resultat = Number(a) / Number(b);
            }
        } catch (error) {
            resultat = error;
        }
    }






    switch (Number(choix)) {

        case 1:

            addition(premierNombre,deuxiemeNombre);

            break;
            
            
        case 2:

            soustraction(premierNombre,deuxiemeNombre);

            break;


        case 3:

            multiplication(premierNombre,deuxiemeNombre);

            break;


        case 4:

            division(premierNombre,deuxiemeNombre);

            break;


        default :

            try {
                
                throw new Error('Une erreur s\'est produit');

            } catch (error) {
                
                alert(error);

            }

    }

    alert(resultat);

    restart = confirm("Voulez-vous refaire un calcul ?")

} while (restart);







//correction :

/*


// Fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
    if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
}

// Demande un choix
do {
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
} while(choix != 1 && choix != 2 && choix != 3 && choix != 4)

// Demande deux nombres
do {
    var premierNombre = Number(prompt("Entrez un premier nombre :"));
    var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
} while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

// Appelle la fonction choisie
try{
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        
        case 2:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;
        
        case 3:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;

        default:
            throw new Error("Une erreur est survenue.");
    }

    // Affiche le résultat
    alert("Voici le résultat : " + resultat);
}
catch(error) {
    alert(error); // Si une erreur est survenue, on affiche l'erreur
}

*/