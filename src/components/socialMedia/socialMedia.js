import "./media.css";
import fb from "../../Images/facebook.png";
import yt from "../../Images/youtube.png";
import github from "../../Images/github.png";
import insta from "../../Images/instagram.png";
import twit from "../../Images/twitter.png";
function SocialMedia() {
    return (
        <>
            <div className="container">
                <p className="text-center display-6 fs-6">Follow Me On</p><br />
                <div className="hstack socialBar">
                    <a href="https://www.facebook.com/bikal.7565788885" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={fb} className="media fb" alt="Facebook Link" />
                    </a>
                    <a href="https://www.youtube.com/@bikaltec11" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={yt} className="media yt" alt="Youtube Link" />
                    </a>
                    <a href="https://github.com/bikalthapa/" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={github} className="media git" alt="Github Link" />
                    </a>
                    <a href="https://www.instagram.com/bikal.7565788885/" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={insta} className="media insta" alt="Instagram Link" />
                    </a>
                    <div className="p-2">
                        <img src={twit} className="media twit" alt="Twitter Link" />
                    </div>
                </div>
            </div>
        </>
    );
}
function Media() {
    return (
        <div className="container">
            <p className="text-center">Follow Me On</p>
            <div className="row row-cols-5 row-cols-sm-5 g-4">
                <div className="col">
                    <a href="https://www.facebook.com/bikal.7565788885" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={fb} className="media" alt="Facebook Link" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.youtube.com/@bikaltec11" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={yt} className="media" alt="Youtube Link" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/bikalthapa/" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={github} className="media" alt="Github Link" />
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.instagram.com/bikal.7565788885/" target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={insta} className="media" alt="Instagram Link" />
                    </a>
                </div>
                <div className="col">
                    <a target="_blank" rel="noopener noreferrer" className="p-2">
                        <img src={twit} className="media" alt="Twitter Link" />
                    </a>
                </div>
            </div>
            <br/>
        </div>
    );
}
export default SocialMedia;
export { Media };