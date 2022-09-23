
import {useState} from 'react'


function App() {

  
  // Dans useState, on a un tableau contenant les données de depart et une fonction permetant de modifier le state
  //Destructuring | La donnée du state sera stocker dans la variable monState
  // eslint-disable-next-line no-unused-vars
  const [monState, setMonState] = useState(10)

  return (
  
    <div className="App">
      <h1>hello app react</h1>

      {/* Permet d'appeler une variable */}

      {monState} {/* 10 */}
    </div>
  );

}

export default App;
