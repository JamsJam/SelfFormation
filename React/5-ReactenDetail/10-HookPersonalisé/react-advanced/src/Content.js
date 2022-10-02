import React from 'react'

export default function Content(props) {
  return (
    <div className='content'> 
    {/* ici ça me permet d'afficher le contenues balises du component */}
        {props.children}
    </div>
  )
}
