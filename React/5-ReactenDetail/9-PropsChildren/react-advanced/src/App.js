import { useState,useEffect,useRef} from 'react';
import Video from './video.mp4';
import  Content  from "./Content";
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true)
//  fonction permetant de creer ou detruire le composant

  const toggleFunc = () => {
    setToggle(!toggle)
  }
  // est ici un tableau vide au debut
  // a la fin, on obtien un tableau avec toute les reference voulu. ici toute les videos
    const ref = useRef([])

    useEffect(() => {

      setTimeout(() => {
        ref.current.pause()
      }, 4000);
    }, [])
    
    const addToRef = el =>{
      // si l'element existe et si il n'est pas deja present dans ref.curent
      if(el && !ref.current.includes(el)){
        // On envois l'element dans le tableau ref.current
        ref.current.push(el)
      }
    }

  return (
    <div className="App">

      {/* Permet d'utiliser une video avec react */}
      {/* 1) Appel la methode addToreff
          2) la methode va logger mon element
      */}
      <video ref={addToRef} width="750" height="500" autoPlay muted controls>
        <source src={Video} type='video/mp4' />
      </video>

      {/* Permet d'utiliser une video avec react */}
      {/* <video ref={addToRef} width="750" height="500" autoPlay muted controls>
        <source src={Video} type='video/mp4' />
      </video> */}

      {/* Permet d'utiliser une video avec react */}
      {/* <video ref={addToRef} width="750" height="500" autoPlay muted controls>
        <source src={Video} type='video/mp4' />
      </video> */}

      <Content/>


      <Content>
        <h1>Titre de mon article 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam! </p>
      </Content>
      <Content>
        <h1>Titre de mon article 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam! </p>
      </Content>
      <Content>
        <h1>Titre de mon article 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam! </p>
      </Content>



      <button onClick={toggleFunc}>Toggle</button>
      
      
    </div>
  );
}

export default App;
