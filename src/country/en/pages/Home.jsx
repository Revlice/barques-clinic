import Information from '../components/Information.jsx';
import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Connections from '../components/Connections.jsx';
import Footer from '../components/Footer.jsx';
import Services from '../components/Services.jsx';
import MainAbout from '../components/MainAbout.jsx';
import HairTransplantInfo from "../components/HairTransplantInfo.jsx";

const Home = ()=>{
    return(
        <>
            <Information/>
            <Header/>
            <Main/>
            <MainAbout/>
            <Services/>
            <HairTransplantInfo/>
            <Connections/>
            <Footer/>
        </>
    )
};
export default Home;