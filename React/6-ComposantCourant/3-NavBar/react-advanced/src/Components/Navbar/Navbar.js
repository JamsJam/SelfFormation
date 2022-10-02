import React, {useState, useEffect} from 'react'
import "./Navbar.css"

export default function Navebar() {

  const [toggleMenu, setToggleMenu] =  useState(false);
  const [larger, setLarger] =  useState(window.innerWidth);
 


  //Toggle navBar
 const toggleChange = ()=> {
   setToggleMenu(!toggleMenu)
  }
//
  useEffect(() => {
    const changeWidth = () => {
      setLarger(window.innerWidth);
    } 
    window.addEventListener('resize', changeWidth)
  
    return () => {
      window.removeEventListener('resize',changeWidth)
    }
  }, [])
  

  

  return (
    <nav>
      {(toggleMenu || larger>500) && (
        <ul className='liste'>
            <li className="items">Accueil</li>
            <li className="items">Service</li>
            <li className="items">Contact</li>
        </ul>
        )}
        <button 
        className="btn"
        onClick={toggleChange}
        >  icone</button>
    </nav>
  )
}
