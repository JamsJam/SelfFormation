import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <div className="App">
        <Routes>
            <Route 
            // Indique la route concerné
                path="/" 
                // Indique l'element  a affiché sur cette route
                element={<Home/>}
                >
            </Route>
        </Routes>
    </div>
);
}

export default App;
