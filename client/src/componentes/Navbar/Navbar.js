import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import { UserContext } from "../../context/UserContext";

import "./Navbar.css"

import logo from "../../img/techfest_logo.png";
import { useNavigate } from "react-router-dom";

function Navbar(){


    const {user, toggleUser} = useContext(UserContext);

    //user ta setado como padrão

    const navigate = useNavigate();

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }

    const togglerLogin = () => {

        //verifica se o id do context é 0, se for, vai pra login. se não, vai pra tela do usuario

        if(user.id===0){

            navigate('/tela-login');
        }else{

            navigate('/tela-usuario');


        }


    }

    return (

        <header>

             <img src={logo} alt="logo-techFest" />
             <nav ref={navRef}>
                <a href="/#">Palestras</a>
                <a href='#oficinas'>Oficinas</a>
                <a href="/#">Stands</a>
                <a href="/#">Inscrições</a>
                <a href="/#">Localização</a>
                
                <button className="login-button" onClick={togglerLogin}>

                    {user.nome}
                    
                </button>

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