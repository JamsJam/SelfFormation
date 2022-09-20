let article = document.querySelectorAll('article');
let titre = document.querySelectorAll('h1');





// Il y a une propagation de l'evelement de article sur  le h1
article[0].addEventListener('click',() => {
    alert('article cliqué')
})

titre[0].addEventListener('click',() => {
    alert('titre cliqué')
})






// Il n'y a plus propagation de l'evel=nement de article sur  le h1
article[1].addEventListener('click',() => {
    alert('article cliqué')
})

titre[1].addEventListener('click',(e) => {
    alert('titre cliqué')
    e.stopPropagation()
})