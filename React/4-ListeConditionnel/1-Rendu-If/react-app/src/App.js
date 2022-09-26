import {useState} from 'react';
// import React from 'react'
import Item from './Item';

function App() {


  const[toggle, setToggle] = useState(true)
  const changeState = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  let toggleContenu; 

  if(toggle === true){
    toggleContenu = <div>Le state est true</div>
  }else{
    
    toggleContenu = <div>Le state est false</div>
  }


    return (
      <div className="App">
      <h1>hello state App</h1>
      < Item />
      <button onClick={changeState}> change State </button>
      {toggleContenu}
    </div>
  );


}

export default App;
