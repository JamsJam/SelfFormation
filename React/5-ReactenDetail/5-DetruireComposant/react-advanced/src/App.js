import { useState} from 'react';
import Timer from "./Timer";
import './App.css';

function App() {


  const [toggle, setToggle] = useState(true)

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">

      
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle && <h1><Timer /></h1>}</h2>
      
    </div>
  );
}

export default App;
