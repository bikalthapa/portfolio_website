import "./carousel.css";
import { Testimonial } from "../cards/cards";
function Carousel() {
    return (
        <div className="carousel_container container g-2">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-block h-100 d-flex justify-content-center" alt="...">
                            <Testimonial image={require("../../Images/user.png")} name="Lila Rai" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec justo tincidunt tincidunt. Nullam euismod, urna vel tincidunt tincidunt, libero justo varius justo, vel lacinia nunc urna auctor libero. "/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block h-100 d-flex justify-content-center" alt="...">
                            <Testimonial image={require("../../Images/user1.png")} name="Suresh Thapa" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec justo tincidunt tincidunt. Nullam euismo."/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-block h-100 d-flex justify-content-center" alt="...">
                            <Testimonial image={require("../../Images/user.png")} name="Binita Nepali" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero nec justo tincidunt tincidunt. Nullam euismod, urna vel tincidunt tincidunt,"/>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark bg-opacity-75 rounded-start rounded-end" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark bg-opacity-75 rounded-start rounded-end" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
export default Carousel;