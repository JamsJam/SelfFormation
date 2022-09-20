//localStorage = stockage meme apres que le navigateur soit fermé
//sessionStorage = stockage seulement pendant la session

// setItem([clé],[valeur]) = creer une variable
// getItem[clé] = appeler une variable
// removeItem[clé] = supprimer une variable

if(localStorage.getItem('prenom')){
    
    document.body.append('Bonjour' + localStorage.getItem('prenom'))

}else{

    localStorage.setItem(['prenom'],['Mark'])
    
}