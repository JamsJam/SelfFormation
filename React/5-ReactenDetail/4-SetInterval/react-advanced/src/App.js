import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(1);


  // Creer une fonc,tion qui sera appeler a chaque mise a jour du state
  // UseEffet permet aussi de faire des Appels a une API
  useEffect(()=>{
    

      const intervalID = setInterval(() => {
        setTimer(
          timer => timer + 1
          );
      }, 1000);
      
      return() => {
        clearInterval(intervalID)
      }
  }, [])



  

  return (
    <div className="App">

      <h1>{timer}</h1>

      
    </div>
  );
}

export default App;
