import Home from "./pages/Home.jsx";
import {Route,Routes} from 'react-router-dom';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import HairTransplant from "./pages/HairTransplant.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/technics" element={<HairTransplant/>}/>
                <Route path="/about/privacy-policy" element={<PrivacyPolicy/>}></Route>
            </Routes>
        </>
    )
}
export default App;