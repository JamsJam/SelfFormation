import { useState, useEffect } from 'react';


function Timer() {

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
        // alert("COMPOSANT DETRUIT")
        clearInterval(intervalID)
      }
  }, [])
  


  

  return (
    <>
      <h1>{timer}</h1>

    </>
  );
}

export default Timer;
