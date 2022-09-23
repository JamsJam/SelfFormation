//importation du css de Items qui s'executera partout ou le composant est appelé
import './Item.css'
import imgLac from  '../../Assets/imgLac.jpg'

function Item(){
    
    const toggle = true

    return (
        // cette div permet de fait un returne sur plusieurs lignes
        <div>
            <h1 class="titre-item">Hello depuis Item</h1>
            <p>Pour mettre su style, on peux utiliser <span style ={{color: 'crimson'}}>l'attribut avec des accolades </span></p>
            <p>les attributs s'ecrive en <span style ={{fontSize: '50px'}}>camelCase </span></p>
            {/* Si toggle est true alors la couleur est bleus sinon elle est rouge. ( condition ternaire) */}
            <p>les attributs s'ecrive en <span style ={{color: toggle ? "blue" : "red"}}>camelCase </span></p>
            {/* permet d'appeler simplement une image */}
            <img src={"https://images.unsplash.com/photo-1663352248740-645afa021c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"} alt="" />
            {/* En important l'image et en referençant le chemin d'acces de l'image */}
            <img src={imgLac} alt="" />
        </div>
    )
}

export default Item;