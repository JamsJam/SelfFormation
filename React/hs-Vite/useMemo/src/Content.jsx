import React from 'react'

  function Content(props) {
  console.log(props.children);
  return (

    <div className='content'>
     {props.num}

      
        
    </div>
  )

}
//react.memo is a higher order component that prevents a component from re-rendering if the props passed to it are the same as the previous props.
export default React.memo(Content)
