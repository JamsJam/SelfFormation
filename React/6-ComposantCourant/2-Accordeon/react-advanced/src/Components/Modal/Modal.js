import React ,{useState}  from 'react';
import "./Modal.css"

export default function Modal() {

    const [modal, setModal] = useState(false)

    function toggleModal(){
        setModal(!modal)
    }
  return (
    <>
   

   <button onClick = {toggleModal}>Open</button>
            {modal && (
        <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <h2>hello Modal</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia animi adipisci eligendi, dignissimos at quidem odio totam vitae eum accusantium labore ab ex facilis. Culpa cumque aperiam facere dolore?</p>
                    </div>
                    <button onClick = {toggleModal}>Close</button>
                </div>
        </div>
        )}
    </>
  )
}
