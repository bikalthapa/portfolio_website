import "./modal.css";
import { useRef } from "react";
class Validator {
    constructor() {
        this.type = "text";
    }
    setType(typ) {
        this.type = typ;
    }
    validate(typ, ref) {
        if (ref.value === "") {
            this.setDescription(ref, true);
            return false;
        } else {
            return true;
        }
    }
    setDescription(ref, setWarning) {
        let descriptorId = ref.getAttribute("descriptor");
        let descriptor = document.getElementById(descriptorId);

        if (setWarning === true) {
            // Applying the warning color //
            ref.classList.add("border-danger");
            descriptor.classList.add("text-danger");
        } else {
            ref.classList.remove("border-danger");
            descriptor.classList.remove("text-danger");
        }

    }
}

function Modal(props) {
    let validator = new Validator();

    let email = useRef(null);
    let password = useRef(null);
    let fullName = useRef(null);
    function Login(e) {
        e.preventDefault();
        let emailValidation = validator.validate("email", email.current);
        let passwordValidation = validator.validate("password", password.current);
        if (emailValidation === true && passwordValidation === true) {
            alert("You Can Login Now");
        }
    }
    function signUp(e){
        e.preventDefault();
        let fullNameValidation = validator.validate("text",fullName.current);
        let emailValidation = validator.validate("email",email.current);
        let passwordValidation = validator.validate("password",password.current);
        if(fullNameValidation ===true && emailValidation===true && passwordValidation===true){
            alert("You can sign in");
        }
    }

    let inputs = document.getElementsByClassName("form-control");
    for (let input of inputs) {
        input.addEventListener("input", (e) => {
            if (e.target.value === "") {
                validator.setDescription(e.target, true);
            } else {
                validator.setDescription(e.target, false);
            }
        });
    }
    return (
        <div className={`authenticationModal d-${props.modalDisplay}`}>
            <div className="hstack w-100 modalHeader">
                <div className="p-2 fs-4">{props.mode}</div>
                <div className="p-2 ms-auto">
                    <button type="button" className="btn-close m-1" aria-label="Close" onClick={props.closeModal}></button>
                </div>
            </div>
            <div className="modalBody container">
                <form className="container">
                    {
                        props.mode === "SignUp" &&
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" id="nameHelp">Full Name</label>
                            <input type="text" className="form-control" ref={fullName} id="name" descriptor="nameHelp"/>
                        </div>
                    }
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" id="emailHelp">Email address</label>
                        <input type="email" className="form-control" ref={email} id="email" descriptor="emailHelp" />
                    </div><br />
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" id="passwordHelp">Password</label>
                        <input type="password" className="form-control" ref={password} id="password" descriptor="passwordHelp" />
                    </div><br />
                    {
                        props.mode === "Login" &&
                        <div className="modalFooter container">
                            <button className="btn btn-primary loginBtn" onClick={Login}>Login</button><br />
                            <p className="text-center text-primary forgotPassword">Forgot Password?</p>
                            <p className="text-center text-secondary or">Or</p>
                            <button type="submit" className="w-100 newAccount" onClick={props.toogleAuth}>Create new account</button><br />
                        </div>
                    }
                    {
                        props.mode === "SignUp" &&
                        <div className="modalFooter container">
                            <button type="submit" className="newAccount" onClick={signUp}>Sign Up</button><br />
                            <p className="text-center text-secondary or">Or</p>
                            <p className="text-center text-primary forgotPassword" onClick={props.toogleAuth}>Already have an account?</p>
                            <button type="submit" className="btn btn-primary loginBtn" onClick={props.toogleAuth}>Login</button><br />
                        </div>
                    }
                </form>
            </div>
        </div>
    );
}
export default Modal;