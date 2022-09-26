#   Les regles des hooks

Il y a deux regles importants concernants les hooks :

- Creer un conponant a la racine de la fonction et non dans une imbrication ou dans une condition   :

    -   ``` javascript

        //voici un hook bien declarer
        export default function Form() {

            const [dataArr,setDataArr] = useState([
                {txt: "Coder avec React", id: uuidv4()},
                {txt:"Aller a la salle", id: uuidv4()},
                {txt:"Apprendre symfony", id: uuidv4()}
            ])
            return(
                //  # code...
            )
        }
        //exemple de hook qui provoquera une erreur 
        let toggle = false

        if(toggle){
            const [data,setData] = useState(10);
        }

        ```

-   Le nom de la fonction utiliser pour declarer le hook doit commancer par une majuscule 
    -   ``` javascript

        //voici un hook bien declarer
        export default function Form() {

            const [dataArr,setDataArr] = useState([
                {txt: "Coder avec React", id: uuidv4()},
                {txt:"Aller a la salle", id: uuidv4()},
                {txt:"Apprendre symfony", id: uuidv4()}
            ])
            return(
                //  # code...
            )
        }
        

        //voici un hook qui renvera une erreur
        export default function form() {

            const [dataArr,setDataArr] = useState([
                {txt: "Coder avec React", id: uuidv4()},
                {txt:"Aller a la salle", id: uuidv4()},
                {txt:"Apprendre symfony", id: uuidv4()}
            ])
            return(
                //  # code...
            )
        }
        

        ```

