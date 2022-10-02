import { useState, useEffect } from "react";


export default function useDimention (){
    

    const [dimention, setDimention] = useState();



    useEffect(() => {
      window.addEventListener('resize', resizeFunc);
    
      function resizeFunc() {
        setDimention(window.innerWidth)
      }
      resizeFunc()
      return () => {
        window.addEventListener('resize', resizeFunc)
      }
    }, [])
    
}