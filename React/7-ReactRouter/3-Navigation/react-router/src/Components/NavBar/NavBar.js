import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
    </nav>
  )
}
