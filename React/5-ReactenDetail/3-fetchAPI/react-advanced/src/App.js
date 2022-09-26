import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();


  // Creer une fonc,tion qui sera appeler a chaque mise a jour du state
  // UseEffet permet aussi de faire des Appels a une API
  useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      // console.log(response);
      return response.json()
    })
    .then(data => {
      // console.log(data)
      setDataImg(data[0].url)
    })
  },[dataImg])



  

  return (
    <div className="App">

      {dataImg && <img src={dataImg} alt="catimage" width="300px"/>}
      
    </div>
  );
}

export default App;
