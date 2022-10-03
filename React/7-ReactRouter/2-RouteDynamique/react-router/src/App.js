import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile'
import NotFound from './Components/NotFound/NotFound';

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
            <Route 
            // Route dynamique en fonction de la variable id
                path="/profil/:id" 
                // Indique l'element  a affiché sur cette route
                element={<Profile/>}
                >
            </Route>
            <Route 
            //  Toute les route qui n'existe pas
            // permet de gerer les erreures 404
                path="*" 
                // Indique l'element  a affiché sur cette route
                element={<NotFound/>}
                >
            </Route>
        </Routes>
    </div>
);
}

export default App;
