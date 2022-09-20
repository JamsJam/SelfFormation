// Sélectionner nos éléments
let btn       = document.querySelector('button');
let p       = document.querySelector('p');
let hidden    = true;

// Cacher le message
p.style.display = "none";

// Détecter le clic
btn.addEventListener('click', () => {
  
  if(hidden) {
    btn.textContent = "Cacher";
    p.style.display = "block";
    hidden = false;
  }
  else {
    btn.textContent = "Afficher";
    p.style.display = "none";
    hidden = true;
  }
  
});