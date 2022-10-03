import React from 'react'
import { /*Link,*/ NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink
          to='/'
          style={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Accueil</NavLink>
        <NavLink
          to='/service'
          style={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Service</NavLink>
        <NavLink
          to='/contact'
          style={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Contact</NavLink>
    </nav>
  )
}
