// Il faut eviter de faire remonter des props !!!
import Item from './Item'
import {useState} from 'react'


function App() {


  const [monState, setMonState] = useState(10)

  // Cette fonction permet d'utiliser la fonction set monState
  const modifyState = (data) => {
    console.log(data) // ici la fonction va afficher les donnée qu'elle reçois en console
    setMonState(
      monState + 10  // Ici la fonction ajoute 10 au state
    );

  }

  return (
  
    <div className="App">
      <h1>hello state : {monState}</h1>
      
      {/* Permet de donner une valeur au prop dans item.js */}
      
      {/* on peut faire passer une fonction dans le props */}
      <Item func = {modifyState}/>
    </div>
  );

}

export default App;
