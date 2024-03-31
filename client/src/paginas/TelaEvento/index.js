import React from "react";

import './style.css';

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import { useLocation, useNavigate } from 'react-router-dom';


import { palestrasCardList, oficinasCardList } from "../../componentes/dados";
import Navbar from "../../componentes/Navbar/Navbar";

function TelaEvento() {  

  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const { toggleUser } = useContext(UserContext);
  

  let data;

  { dado.tipo === "palestra" ? data = palestrasCardList : data = oficinasCardList }

  let objetoEvento;

  data.forEach((objeto) => {
    // Comparação do ID dentro do loop
    if (objeto.id === dado.id) {
      objetoEvento = objeto;
      // Interrompe a iteração após encontrar o ID 4
      return;
    }
  });
  
  const realizarInscrição = () =>{

    // const newUser = {
    //     nome: "Djair",
    //     id: 550
    //   }
    
    // toggleUser(newUser);

    navigate('/');


  }

  return (

    <>

    <Navbar/>
    
    

    <div className="containerEvento">

      <img src={objetoEvento.imgSrc} />

      <h1>{objetoEvento.title}</h1>

      <p>{objetoEvento.descricao}</p>

      <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button>

    </div>

    </>





  );




};

export default TelaEvento;