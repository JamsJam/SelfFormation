import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Contact() {

  const location = useLocation()
  // return  des information sur la page
  // peut retourner un state si le lient en contien
  console.log(location);
  return (
    <div>
        <h1>Section Contact</h1>
    </div>
  )
}
