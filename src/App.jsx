import Home from "./pages/Home.jsx";
import {Route,Routes} from 'react-router-dom';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </>
    )
}
export default App;