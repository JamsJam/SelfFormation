import {useState} from 'react'

function Item(props){
   const [itemState] = useState('Item State')
    
    return (
        // cette div permet de fait un returne sur plusieurs lignes
        <div>
            
            <h1>{props.number}</h1>
            {/* En appuyant, le statede App (soit du composant parent) change */}
            {/* <button onClick={props.func}> Change state</button> */}
            <button onClick={() => props.func(itemState)}> Change state</button>
        </div>
    )
}

export default Item;