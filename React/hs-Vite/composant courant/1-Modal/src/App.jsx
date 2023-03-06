import { useState } from 'react';
import Modal from './components/Modal/Modal';
import './App.css'


function App() {
  // state for modal : true or false
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // breakpoint
  


  return (
    <div className="App">

      {/* if the modal is true : show the modal */}
      {/* pass the fonction closeModal to the component Modal with props */}
      {showModal &&  <Modal onClose={closeModal}/>}
      <h1>Modal</h1>
      <button onClick={openModal}>Open Modal</button>

      


    </div>
  )
}

export default App
