import { useState, useRef, useEffect } from 'react'
import './App.css'
import Video from './assets/video.mp4'

function App() {
   const [toggle, setToggle] = useState(true);

    
    const handleClick = () => {
        setToggle(!toggle);
    }
    
    // addToref is a function that takes an element and returns it to the console
    // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    const addToRef = el => { 
      console.log(el);
    }
    
    useEffect(() => {
      // addEventListener avec React
    
      function actionResize() {
        console.log("resize");
      }


      //1. addEventListener
      window.addEventListener('resize', actionResize);
    

      //2. removeEventListener
      return () => {
        window.removeEventListener('resize', actionResize);
      }
    }, [])

  return (
    <div >
       <h1>UseRef</h1>
       <h2>{toggle ? "true" : "false"}</h2>

        <video height="200" width="350" autoPlay muted controls  ref={addToRef}>
          <source src={Video} type="video/mp4"/>
        </video>
        <video height="200" width="350" autoPlay muted controls  ref={addToRef}>
          <source src={Video} type="video/mp4"/>
        </video>
        <video height="200" width="350" autoPlay muted controls  ref={addToRef}>
          <source src={Video} type="video/mp4"/>
        </video>

       <button onClick={handleClick}>toggle</button>
    </div>
  )
}

export default App
