import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dataComponent, setDatacomponent] = useState(0);
  const [dataComponent1, setDatacomponent1] = useState(0);
  const [dataComponent2, setDatacomponent2] = useState(0);

  // Creer une fonc,tion qui sera appeler a chaque mise a jour du state
  //en passant un tableau en affichage permet d'indiquer quel element surveiller
  //si [] alors la fonction sera appeler seulement a la premiere mise a jour
  // test avec cataComponent et dataComponent1
  useEffect(()=>{
    console.log("data Change")
  },[dataComponent2])



  const changeState = () => {
    if(dataComponent<10){

      setDatacomponent(dataComponent + 1)
    }else{
      setDatacomponent(0)

    }
  }

  return (
    <div className="App">
      <h1>le state est {dataComponent}</h1>
      <button onClick={changeState}>change State</button>
      
    </div>
  );
}

export default App;
