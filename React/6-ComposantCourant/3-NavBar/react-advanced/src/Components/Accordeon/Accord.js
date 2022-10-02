import React, {  useState, useRef, useEffect} from 'react'
import './Accord.css'
import Chevron from "./chevron.png";

export default function Accord() {

  const [toggle, setToggle] = useState(false)

  const toggleState = () => {
    console.log('state')
    setToggle(!toggle)
  }

  const [refHeightEl , setRefHeightEl] = useState();
  const refHeight = useRef();
  useEffect(() => {

    setRefHeightEl(`${refHeight.current.scrollHeight}px`)
  

  }, [])
  

  return (
    <div className='accord'>

        <div className="accord-visible" onClick={toggleState}>
          
          <h2>
            Lorem ipsum dolor sit amet.
          </h2>
          <img src={Chevron} alt="" />
        </div>
        
        <div  className={toggle ? "accord-toggle animated" 
              : "accord-toggle" }
              ref={refHeight}
              style={{height: toggle ? `${refHeightEl }` : "0px"}}
              >

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ex dignissimos omnis quisquam voluptate accusamus natus possimus ea cumque doloribus, voluptas itaque rem eius magnam ad ullam impedit tenetur animi.
          </p>

        </div>
    </div>
  )
}
