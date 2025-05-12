import "./aboutMe.css";
import Progress from "../../progressBar/progress";
function AboutMe() {
    return (
        <div className="container">
            <p className="text-center display-6">About Me</p>
            <div className="card mb-3 aboutCard">
                <div className="row g-0">
                    <div className="col-md-5 imgContainer">
                        <img src={require("../../../Images/logo.jpg")} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <p className="card-text fw-bold text-danger m-0">Hello from,</p>
                            <h5 className="card-title fw-bold fs-1">Bikal Thapa</h5>
                            <p>- Web Developer</p>
                            <p className="card-text aboutParagraph m-0">
                                "I am a dedicated student currently enrolled in Grade XI at Shree Shanti Bhagwati Secondary School. My passion lies in the field of computer engineering, and I have deliberately chosen this path to explore both software and hardware aspects.<br /><br />

                                On the software front, I have honed my skills in programming and web development. I’ve created various websites using different technologies, including React and PHP with the Bootstrap framework. The dynamic and responsive nature of web applications fascinates me, and I’m always eager to learn more about front-end and back-end development.<br /><br />

                                However, my curiosity extends beyond code. I find computer hardware equally captivating. Understanding the intricate components that power our digital world—CPUs, memory, storage devices, and more—drives me to explore further.<br /><br />

                                As a student, I embrace continuous learning. I follow tech blogs, collaborate with peers on projects, and seek guidance whenever needed. With a growth mindset, I’m excited to delve deeper into both software and hardware realms, pushing the boundaries of my knowledge.<br /><br />

                                Feel free to reach out if you have any questions or need further advice!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
}
export default AboutMe;