import "./contact.css";
function ContactForm() {
    return (
            <form className="container contactForm p-2">
                <p className="display-6 text-center">Contact Me</p>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="example@domain.com"/>
                </div>
                    <div className="text-center">Or</div>
                <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label">Phone No</label>
                    <input type="number" className="form-control" placeholder="98....." id="phoneNo" min="111111111" max="9999999999"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" placeholder="Your Message For Me"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
    );
}
export default ContactForm;