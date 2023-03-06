function Item (props){


    // props is an object that contains all the props passed to the component
    // props is immutable
    // props is read only
    // props is passed from parent to child
    // props is passed as an object
    // props is passed as an attribute
    // props is passed as a key value pair



    return (
        <div>
            <h2> {props.txt}</h2>
        </div>
    )
}

export default Item;