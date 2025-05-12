import "./navbar.css";
import { Media } from "../socialMedia/socialMedia";
import Modal from "../modal/modal";
import {NavLink} from "react-router-dom";
import { useState } from "react";
function Navbar() {
    const [modalDisplay, setDisplay] = useState("none");
    const [authMode,setAuthMode] = useState("");
    const updateModal = ()=>{
        if(modalDisplay==="none"){
            setDisplay("");
        }else{
            setDisplay("none");
        }
    }
    const login = (updateDisplay)=>{
        setAuthMode("Login");
        updateModal();
    }
    const signup = ()=>{
        setAuthMode("SignUp");
        updateModal();
    }
    const toogleAuth = ()=>{
        if(authMode==="Login"){
            setAuthMode("SignUp");
        }else{
            setAuthMode("Login")
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={require("../../Images/logo.jpg")} alt="Logo" width="30" height="24" className="d-inline-block align-text-top navbar_logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeclassname="active" className="nav-link" to="/about">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Notes</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <a className="login" onClick={login}>Login</a> &nbsp;|&nbsp; 
                            <a className="signup" onClick={signup}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal modalDisplay={modalDisplay} closeModal={updateModal} mode={authMode} toogleAuth={toogleAuth}/>
        </>
    );
}
function Footer() {
    return (
        <div className="row footer">
            <div className="col-sm-3">
                <Media />
            </div>
            <div className="col-sm-8">
                <div className="container footerCopyRight">
                    <img src={require("../../Images/logo.jpg")} className="footerLogo" />
                     &nbsp;&nbsp;Copyright © 2024 Bikal Thapa
                </div>
            </div>
        </div>
    );
}
export default Navbar;
export { Footer };