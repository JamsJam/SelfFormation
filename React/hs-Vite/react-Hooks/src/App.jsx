import {  useState } from 'react';
// import Timer from './Timer';
import './App.css';

function App() {

  //Les regles des hooks :
  // 1. Toujours utiliser des hooks au début de la fonction
  // 2. Toujours utiliser des hooks dans une fonction


  const [toggle , setToggle] = useState(true);
  
  const togglefunc = ()=>{
    setToggle(!toggle);
  }







  return (
    <div>
      <h1>React hooks et base de react</h1>

      
      <section>
        <h2>useEffect + toggle & timer</h2>
           {/* <Timer limit ={togglefunc}/> */}
          <p>{ toggle ? "true": "false"}</p>
        <button onClick={togglefunc}>Toggle</button>
        </section>
    
    </div>
  )
}

export default App
