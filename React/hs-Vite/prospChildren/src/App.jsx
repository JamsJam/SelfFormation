import { useState} from 'react'
import './App.css'
import Video from './assets/video.mp4'
import Content from './Content'

function App() {
   const [toggle, setToggle] = useState(true);

    // props.children
    // props.children is used to display whatever you include between the opening and closing tags when invoking a component.

    

    const handleClick = () => {
        setToggle(!toggle);
    }

  return (
    <div className='App'>
       
       <Content>
            <h1>Titre</h1>
            <p>Lorem ipsum dolor sit amet.</p>
       </Content>
       
       <Content>
            <h1>Encore un titre</h1>
            <p>Lorem ipsum dolor sit amet.</p>
       </Content>
       
       <Content>
            <h1>Un troisieme titre</h1>
            <p>Lorem ipsum dolor sit amet.</p>
       </Content>

       <button onClick={handleClick}>toggle</button>
    </div>
  )
}

export default App
