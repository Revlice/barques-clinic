import Home from "./pages/Home.jsx";
import {Route,Routes} from 'react-router-dom';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import OurServices from "./pages/OurServices.jsx";
import Doctor from './pages/Doctor.jsx';
function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/services" element={<OurServices/>} />
                <Route path="/about/doctors" element={<Doctor/>}/>
            </Routes>
        </>
    )
}
export default App;