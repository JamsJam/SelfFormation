import {useState} from 'react';
// import React from 'react'
import Item from './Item';

function App() {


  const [inputData, setInputData] = useState()
  const changeInput = (e) => {
    // En ecriment dans l'input, on mets a jour le State avec la valeur de l'input
    setInputData(e)
  }
  console.log(inputData)
  return (
    <div className="App">
      <h1>hello state App</h1>
      < Item  />
      {/* input dont je recupere la valeur de la saisie */}
      <input type="text" onInput={e =>changeInput(e.target.value)} />
        
    </div>


  );

}

export default App;
