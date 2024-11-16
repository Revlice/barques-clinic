import Home from "./pages/Home.jsx";
import {Route,Routes} from 'react-router-dom';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import HairTransplant from "./pages/HairTransplant.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Clinic from "./pages/Clinic.jsx";

import ENHome from './country/en/pages/Home.jsx';
import ENAbout from './country/en/pages/About.jsx';
import ENContact from './country/en/pages/Contact.jsx';
import ENHairTransplant from './country/en/pages/HairTransplant.jsx';
import ENPrivacyPolicy from './country/en/pages/PrivacyPolicy.jsx';
import ENClinic from './country/en/pages/Clinic.jsx';
import NotFound from "./404/NotFound.jsx";

function App(){

    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/technics" element={<HairTransplant/>}/>
                <Route path="/about/privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="/about/clinic" element={<Clinic/>}/>

                <Route path="*" element={<NotFound/>}/>

                {/*ingilizce*/}
                <Route path="/en" element={<ENHome/>}/>
                <Route path="/en/about" element={<ENAbout/>} />
                <Route path="/en/contact" element={<ENContact/>} />
                <Route path="/en/technics" element={<ENHairTransplant/>}/>
                <Route path="/en/about/privacy-policy" element={<ENPrivacyPolicy/>}/>
                <Route path="/en/about/clinic" element={<ENClinic/>}/>

            </Routes>
        </>
    )
}
export default App;