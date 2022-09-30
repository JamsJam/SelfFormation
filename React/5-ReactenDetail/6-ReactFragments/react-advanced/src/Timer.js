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
      
        clearInterval(intervalID)
      }
  }, [])
  


  
// toujour retunr qu'un seul bloc !!
  return (
    // une div alourdis le dom en rajoutant une div
    // on peux utiliser le tag <fragment> pour avoir les element de maniere independante
    // il est possible d'aller plus vite de cette maniere :

    <>

      <h1>{timer}</h1>

      
    </>
  );
}

export default Timer;
