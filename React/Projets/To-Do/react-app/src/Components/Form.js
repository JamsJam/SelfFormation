import { useState } from "react";
import  Item  from "./Item";
import { v4 as uuidv4 } from "uuid";

// Componant retournant une formulaire d'ajout et la listee d'item
export default function Form() {
    
    //state permettant de d'afficher la liste des choses a faire
    const [dataArr,setDataArr] = useState([
        {txt: "Coder avec React", id: uuidv4()},
        {txt:"Aller a la salle", id: uuidv4()},
        {txt:"Apprendre symfony", id: uuidv4()}
    ])
    // permet de stocker le contenue de l'input text
    const [inputState, setInputState] = useState()

    const deletElement = id => {
        
        const filterState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filterState)
    }
    // permet de modifier le state 
    const addTodo = e => {
        e.preventDefault();
        //- copie le state
        const newArr = [ ...dataArr]
        //modifie la copie du state
        const newTodo = {}
        newTodo.txt = inputState;
        newTodo.id = uuidv4();
        //remplacer le state
        newArr.push(newTodo)
        
        setDataArr(newArr)
        setInputState('')
    }

    const linkedInput = e => {
        // console.log(e)
        setInputState(e);
    }



    return(

        <div className="m-auto px-4 col12 col-sm10 col-lg-6">

            <form onSubmit={e => addTodo(e)} className="mb-3">
                {/* htmlFor corespond a l'attribut for de la balise label */}
                <label htmlFor="todo" className="form-label mt-3">Choses à faire</label>
                <input 
                value={inputState}
                onChange={e =>linkedInput(e.target.value)}
                type="text" 
                id="todo" 
                className="form-control" />
                <button className="btn btn-primary d-block mt-2">Envoyer</button>
            </form>
            <h2>Liste de chose a faire</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return(

                        <Item 
                        txt = {item.txt}
                        key = {item.id}
                        id = {item.id}
                        delFunc = {deletElement}
                        />
                        )
                    } 
                )}
            </ul>
        </div>
                    
    )
}