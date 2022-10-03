import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
        <nav>
          <Link to='/service/developement' >Développement</Link>
          <Link to='/service/cybersecurity' >Cyber sécurité</Link>
        </nav>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <Outlet />
    </div>
  )
}
