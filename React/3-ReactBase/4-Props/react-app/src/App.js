import Item from './Item'
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
      {/* En appuyant, le state change, donc la valeur du props aussi et le composant se mets a jour*/}
      <button onClick={modifyState}> Change state</button>
      {/* Permet de donner une valeur au prop dans item.js */}
      <Item txt = 'hello Word'/>
      {/* les props permettent egalement de faire passer des states d'un parent a un enfant */}
      <Item number = {monState}/>
    </div>
  );

}

export default App;
