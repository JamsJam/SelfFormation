import React from 'react'

 export default function (props) {
  console.log(props.children);
  return (

    <div className='content'>
     {/* contient des articles */}
      {/* sera remplis au moment de l'utilisation */}

        {props.children}
        
    </div>
  )
}
