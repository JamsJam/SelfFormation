import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile'
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/NavBar/NavBar';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import Developement from './Components/Service/Developement/Developement';
import CyberSecurity from './Components/Service/CyberSecurity/CyberSecurity';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/profil/:id" element={<Profile/>} />
            
            <Route path="*" element={<NotFound/>} />
            {/* Route parent */}
            <Route path="/service" element={<Service/>} >
                {/* route enfant */}
                <Route path="/service/developement" element={<Developement/>} />
                <Route path="/service/cybersecurity" element={<CyberSecurity/>} />
            </Route>
            
            <Route path="/contact" element={<Contact/>}></Route>

        </Routes>
    </div>
);
}

export default App;
