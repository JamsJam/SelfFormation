//importation du css de Items qui s'executera partout ou le composant est appelé
import './Item.css'

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
        </div>
    )
}

export default Item;