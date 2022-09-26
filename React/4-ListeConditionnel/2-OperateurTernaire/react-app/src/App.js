import {useState} from 'react';
// import React from 'react'
import Item from './Item';

function App() {


  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="App">
      {/* Condition ternaire pour un rendu conditionnel */}
      { toggle ? <h1>hello toggle !</h1> : <h1>Ciao toggle!</h1>}
      {/* short circuit operator. Fonctionne seulement sur la valeur de true ou seulement sur la valuer de false */}
      {toggle && <h1>hello toggle uniquement ON!</h1>}
      < Item  />
      <button onClick={changeState}> Change mon state</button>
    </div>


  );

}

export default App;
