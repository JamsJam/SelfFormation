

function Item(props){
   
    console.log(props) // renvoie un objet ( qui contient ce qu'un parent lui donnes (ici App.js))

    return (
        // <> permet de fait un returne sur plusieurs lignes
        <div>
            {/* <h1>{props.txt}</h1> */}
            <h1>{props.number}</h1>
        </div>
    )
}

export default Item;