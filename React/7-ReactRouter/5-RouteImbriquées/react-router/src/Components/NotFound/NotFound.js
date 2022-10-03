import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate()
  return (
    <div>
        <h1>Cette page nexiste pas</h1>
        <button 
            onClick = {() => navigate('/')} 
            >
            retourner a la page daccueil
        </button>
    </div>
  )
}
