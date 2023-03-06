import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Navigation from './components/Navigation/Navigation';
import './App.css'


function App() {
  // state for modal : true or false
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navigation />
      {/* if the modal is true : show the modal */}
      {/* pass the fonction closeModal to the component Modal with props */}
      {showModal &&  <Modal onClose={closeModal}/>}
      <h1>Modal</h1>
      <button onClick={openModal}>Open Modal</button>

      


    </div>
  )
}

export default App
