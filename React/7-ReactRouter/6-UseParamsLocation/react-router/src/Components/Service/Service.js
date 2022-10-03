import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <h1>Section service</h1>
        <nav>
          <Link to='/service/developement' >Développement</Link>
          <Link to='/service/cybersecurity' >Cyber sécurité</Link>
        </nav>
        <Outlet />
    </div>
  )
}
