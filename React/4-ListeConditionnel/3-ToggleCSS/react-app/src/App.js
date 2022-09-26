import {useState} from 'react';
// import React from 'react'
import Item from './Item';

function App() {


  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="App">
      {/* toggle du CSS  */}
      <div className={ toggle ? "box animated" : "box" }></div>
      < Item  />
      <button onClick={changeState}> Change mon state</button>
    </div>


  );

}

export default App;
