import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import "./Navbar.css"

import logo from "../../img/techfest_logo.png";

function Navbar(){

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }

    return (

        <header>

             <img src={logo} alt="logo-techFest" />
             <nav ref={navRef}>
                <a href="/#">Palestras</a>
                <a href="/#">Oficinas</a>
                <a href="/#">Stands</a>
                <a href="/#">Inscrições</a>
                <a href="/#">Localização</a>
                <button className= "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>                
                </button>          

             </nav>
             <button className= "nav-btn" onClick={showNavBar}>
                <FaBars/>                
            </button>     



        </header>
    );
}

export default Navbar;