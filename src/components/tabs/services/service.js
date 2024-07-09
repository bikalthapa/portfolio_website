import { ServiceCard } from "../../cards/cards";
function Service() {
    let serviceData = [
        {
            id: 1,
            title: "Full Stack Web Development",
            backgroundImg: require("../../../Images/web_development.jpg"),
            description: "My expertise lies in full-stack web development, where I seamlessly integrate React.js, Bootstrap, CSS, HTML, and PHP."
        },
        {
            id: 2,
            title: "Electronic Projects & Arduino",
            backgroundImg: require("../../../Images/arduino_projects.jpg"),
            description: "I possess the skill to create fundamental electronic circuits using Arduino. I can develop simple yet effective circuits for various applications."
        },
        {
            id: 3,
            title: "IOT Projects",
            backgroundImg: require("../../../Images/iot_projects.jpg"),
            description: "I will possess the expertise to conceptualize, design, and develop innovative Internet of Things (IoT) projects. I will create smart solutions that bridge the physical and digital realms in the future."
        }
    ];
    return (
        <div className="container">
            <p className="display-6 text-center tabTitle">What I Offer</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    serviceData.map(data => (
                        <div className="col">
                            <ServiceCard key={data.id} data={data}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Service;