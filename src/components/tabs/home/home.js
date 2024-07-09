import "./home.css";
import { ProfileCards } from "../../cards/cards";
import Portfolio from "../portfolio/portfolio";
import Service from "../services/service";
import AboutMe from "../aboutMe/aboutMe";
import Carousel from "../../carousel/carousel";
function Home() {
    return (
        <>
            <ProfileCards /><br /><br /><br />
            <Portfolio pagination={false}/><br/><br/>
            <Service/><br/><br/> 
            <AboutMe/><br/><br/>
            <p className="display-6 text-center tabTitle">Testinomials</p>
            <Carousel/>
        </>
    );
}
export default Home;