import React from "react";

import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';

import { palestrasCardList, oficinasCardList } from "../../componentes/dados";
import Navbar from "../../componentes/Navbar/Navbar";


import { expoCardList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

function TelaExpo() {
  
  const realizarInscrição = ()=>{


  }

  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

 
  
  let objetoEvento;

  expoCardList.forEach((objeto) => {
    // Comparação do ID dentro do loop
    if (objeto.id === dado.id) {
      objetoEvento = objeto;
      // Interrompe a iteração após encontrar o ID 4
      return;
    }
  });  
  

  return (

    <>

    <Navbar/>
    
    

    <div className="containerEvento">

      <img src={objetoEvento.imgSrc} />

      <h1>{objetoEvento.titulo}</h1>

      <p className="pExpo">{objetoEvento.descricao}</p>

      <p className="pExpo">Organização: {objetoEvento.organizacao}</p>

      <p className="pExpo">Responsavel: {objetoEvento.responsavel}</p>

      <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button>

    </div>

    <Footer/>

    </>





  );




};

export default TelaExpo;