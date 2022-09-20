function modeSombre(){
    document.body.classList.add('dark')
    document.querySelector('span').textContent = 'Theme clair';
    localStorage.setItem('theme','sombre')
    console.log(localStorage.getItem('theme'))
}

window.addEventListener('load',() => {
    
    if (localStorage.getItem('theme')){
        console.log(localStorage.getItem('theme'))
        
        if(localStorage.getItem('theme') == 'sombre'){
            
            console.log(localStorage.getItem('theme'))
            modeSombre();
        }
    }
    
})

document.querySelector('#mode').addEventListener('click', () => {
    if(document.body.classList.contains('dark')){
        
        document.body.classList.remove('dark')
        document.querySelector('span').textContent = 'Theme sombre';
        localStorage.setItem('theme','clair')
        
    } else {
        modeSombre()
        console.log(localStorage.getItem('theme'))
    }
    
})
