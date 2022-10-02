import { useState,useEffect,useRef} from 'react';
import useDimention from './useDimention';
import './App.css';

function App() {

  const browserWidth = useDimention()
  return (
    <div className="App">
      {console.log(browserWidth)}
      {/* Le hook creer permet d'obtenir la taille de l'ecrant a tout moment */}
      {browserWidth>272 ? console.log('Grand Ecran') : console.log('Petit ecran')}
      
      
      
    </div>
  );
}

export default App;
