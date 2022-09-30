import { useState,useEffect,useRef} from 'react';
import Video from './video.mp4'
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true)
//  fonction permetant de creer ou detruire le composant

  const toggleFunc = () => {
    setToggle(!toggle)
  }
    const ref = useRef()

    console.log(ref)// {curent : undefine }

    useEffect(() => {
      console.log(ref) //{current: video} recupere bien la video
      // Rappel :[] indique que useEffect s'executera apres le chargement de la page
      setTimeout(() => {
        ref.current.pause()
      }, 4000);
    }, [])
    

  return (
    <div className="App">

      {/* Permet d'utiliser une video avec react */}
      <video ref={ref} width="750" height="500" autoPlay muted controls>
        <source src={Video} type='video/mp4' />
      </video>


      <button onClick={toggleFunc}>Toggle</button>
      
      
    </div>
  );
}

export default App;
