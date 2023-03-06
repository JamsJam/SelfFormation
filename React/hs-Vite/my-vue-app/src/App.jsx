import { useState } from 'react';
import  Item   from './Item';
import './App.css'

function App() {
  const [monState, setMonState] = useState("le state");
  const textState =  ["le state a changé ^^", "le state a changé !!", "le state a changé encore"];

  const changeState = ()=>{
    

    let index = textState.indexOf(monState)
    do {
      let i = randomIntFromInterval(0,2);
      
    } while (randomIntFromInterval(0,2) == index);
    
    setMonState(textState[i]);

  }


  return (
    <div className="App">
      <h1>{monState}</h1>
      <Item txt="hello word" />
      <Item txt="hello word" />
      <Item txt="hello word" />
      <button onClick={changeState}>Change state</button>
    </div>
  )
}

export default App
