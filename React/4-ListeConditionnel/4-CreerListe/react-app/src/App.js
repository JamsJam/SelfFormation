import {useState} from 'react';
// import React from 'react'
// import Item from './Item';

function App() {


  const [dataArr, setdataArr] = useState([
    {nom:"Juliette"},
    {nom:"John"},
    {nom:"Joris"}
  ]);
  // const changeState = () => {
  //   setToggle(!toggle)
  // }
  
  return (
    <div className="App">
    {/* map exemple */}
    {dataArr.map((item, index)=>{
      return <p key={index}> Nom : {item.nom}</p>
    })}
    </div>


  );

}

export default App;
