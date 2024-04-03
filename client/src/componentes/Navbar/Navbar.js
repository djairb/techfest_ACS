import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import { UserContext } from "../../context/UserContext";

import "./Navbar.css"

import logo from "../../img/techfest_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){


    

    //user ta setado como padrão

    const navigate = useNavigate();

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }

    

    return (

        <header>

            

            <Link to="/"><img  src={logo} alt="logo-techFest" /></Link>
             <nav ref={navRef}>
                <Link to="/pagina-todos-cards-expo">Exposições</Link>
                <Link to="/pagina-todos-cards-apresent">Apresentações</Link>
                <a href="/#">Inscrições</a>
                <a href="https://maps.google.com/maps?ll=-7.93151,-35.297799&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=14776707453120719662">Localização</a>
        
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