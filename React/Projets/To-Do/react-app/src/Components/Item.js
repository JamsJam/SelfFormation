import React from 'react'
//chaque item va contenir un element a faire
export default function Item(props) {
  return (
    <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button 
        className="btn btn-danger p-2"
        onClick={() => props.delFunc(props.id)}
        >
            Supprimer
        </button>
    </li>
  )
}
