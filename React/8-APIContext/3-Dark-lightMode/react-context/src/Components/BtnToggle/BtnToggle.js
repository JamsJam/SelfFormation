import React, {useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './BtnToggle.css'
import darkMode from'./darkMode.svg'
import lightMode from './lightMode.svg'


export default function BtnToggle() {

const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <button 
      onClick={toggleTheme}
      className={theme ? "Btn-Toggle DarkBtn" : "Btn-Toggle LightBtn"}>
        <img src={theme? lightMode : darkMode } alt="" />
      

      
    </button>
  )
}
