import React from 'react'
import { /*Link,*/ NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
        <NavLink
          to='/'
          className={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Accueil</NavLink>
        <NavLink
          to='/service'
          className={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Service</NavLink>
        <NavLink
          to='/contact'
          className={({isActive})=>{
            return(
              isActive ? "activeLink" : ""
            )
          }}
          >Contact</NavLink>
    </nav>
  )
}
