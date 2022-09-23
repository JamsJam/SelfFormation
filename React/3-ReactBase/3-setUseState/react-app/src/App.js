
import {useState} from 'react'


function App() {

  // console.log(useState) //return une fonction
  // console.log(useState()) //return une un tableau [undefine, fonction]
  // console.log(useState(10)) //return une un tableau [10, fonction]
  
  // Dans useState, on a un tableau contenant les données de depart et une fonction permetant de modifier le state

  //Destructuring | La donnée du state sera stocker dans la variable monState
  const [monState, setMonState] = useState(10)

  // Cette fonction permet d'utiliser la fonction set monState
  const modifyState = () => {
    setMonState(
      monState + 10
    );
  }

  return (
  
    <div className="App">
      <h1>hello state : {monState}</h1>
      
      {/* Ici on a utiliser un evenement click sur le bouton qui appelera la fonction modifyState */}
      <button onClick={modifyState}> Change state</button>
    </div>
  );

}

export default App;
