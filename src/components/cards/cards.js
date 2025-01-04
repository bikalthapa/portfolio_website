import "./cards.css";
import { useState, useEffect } from "react";
import SocialMedia from "../socialMedia/socialMedia";
function Cards(props) {// Portfolio Cards
    let title = props.data.title;
    title = title.length >= 80 ? title.substring(0, 75) + "..." : title;
    return (
        <div className="card projectCard">
            <img src={props.data.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body h-100 p-0">
                <div className="projectType">Web Application</div>
                <div className="container">
                    <p className="card-text">
                        <small className="text-body-secondary">{props.data.uploadDate} &#x25CF; {props.data.userName}</small>
                    </p>
                    <h5 className="card-title">{title}</h5>
                    <div className="vstack gap-0">
                        <div className="p-2">
                            <a className="btn btn-primary w-100" href={"https://bikalthapa.github.io/" + props.data.repoName} target="_blank">Demo</a>
                        </div>
                        <div className="p-2">
                            <a className="btn btn-primary w-100" href={"https://github.com/bikalthapa/" + props.data.repoName} target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function LazyCards() {// Lazy loader cards
    return (

        <div className="col">
            <div className="card lazy_projectCard">
                <div src="" className="lazy_image"></div>
                <div className="card-body h-100 p-0">
                    <div className="lazy_projectType"></div>
                    <div className="container">
                        <p className="lazy_date">
                        </p>
                        <h5 className="lazy_title"></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Profile Cards
function ProfileCards(props) {
    const animText = ["I am a Student", "I am a Web Developer"];
    const [anim, setAnim] = useState("");
    const [x, setX] = useState(0);
    const [i, setI] = useState(0);
    const [writingMode, setMode] = useState(true);
    useEffect(() => {
        let writingDelay = 300;
        let erasingDelay = 90;
        const interval = setInterval(() => {
            if (i < animText.length) {
                if (x < animText[i].length && writingMode === true) {// Writing mode is enabled and you haven't completed typing
                    setAnim(anim + animText[i].charAt(x));
                    setX(x + 1);
                } else {//You are done with writing the text.
                    setMode(false);
                    if (x >= 0) {// Erasing the text
                        setAnim(anim.substring(0, x));
                        setX(x - 1);
                    } else {// Reseting the text and moving towards the next
                        setX(0);
                        setAnim("");
                        setI(i + 1);
                        setMode(true);
                    }

                }
            } else {
                setI(0);
            }
        }, writingMode === true ? writingDelay : erasingDelay);

        return () => clearInterval(interval);
    }, [anim, x, i]);

    return (
        <div className="container profileCards">
            <img src={require("../../Images/profile_picture.jpg")} className="profile" />
            <p className="greetings">Hi! There, I am</p>
            <p><span className="B">B</span>ikal <span className="T">T</span>hapa</p>
            <p className="writingAnimation">{anim}</p>
            <p className="display-6 domain">I'l develop for you.</p>
            <SocialMedia />
        </div>
    );
}

// Services Cards
function ServiceCard(props) {
    return (
        <div className="card text-bg-dark">
            <img src={props.data.backgroundImg} className="card-img" alt="..." />
            <div className="card-img-overlay bg-dark bg-opacity-75">
                <h5 className="card-title fs-4">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
        </div>
    )
}

function Testimonial(props) {
    return (
        <>
            <div className="card mb-3 border-primary" style={{maxWidth: "600px"}}>
                <div className="row g-0 p-2">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid user_img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fs-2">{props.name}</h5>
                            <p className="card-text testonimialText">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;
export { ProfileCards, ServiceCard, LazyCards, Testimonial };
