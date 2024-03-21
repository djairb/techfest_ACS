import React from "react";

import './style.css';

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import { useLocation } from 'react-router-dom';

function TelaEvento() {

    const location = useLocation();

  // Obtém o dado do state
    const dado = location.state;

    const {user, toggleUser} = useContext(UserContext);
    console.log("tela evento")
    console.log(dado)

  return (

    <div className="containerEvento">


        <img src="https://onedrive.live.com/embed?resid=3282EDF418D3DB36%212185&authkey=%21AE4rnEe73tpFrwA" />

            

        <h1>{dado.tipo}</h1>


        <button className="botaoInscrever">Se Inscrever</button>





    </div>





  );




};

export default TelaEvento;