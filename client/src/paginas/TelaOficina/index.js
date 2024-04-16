import React, { useState } from "react";

import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { oficinaList, palestraList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

import jose from "../../img/oficinas/jose.png";

import mateus from "../../img/oficinas/mateus.png";


function TelaOficina() {


  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const realizarInscrição = () =>{

  }

  let palestrante = "Palestrante:";
  let palestrantes = "Palestrantes:";

  let objetoStand;

  oficinaList.forEach((objeto) => {
    // Comparação do ID dentro do loop
    if (objeto.id === dado.id) {
      objetoStand = objeto;
      // Interrompe a iteração após encontrar o ID 4
      return;
    }
  });


  return (

    <>

      <Navbar />

      <main className="mainTelaOficina">

        <img className="imagemMain" src={objetoStand.imgSrc} />

        <div className="standTextoPalestra">

          <h1>{objetoStand.titulo}</h1>

          <p>{objetoStand.descricao}</p>

          <div className="palestranteDados">

              <p>{objetoStand.numeroPalestrante > 1 ? palestrantes : palestrante}</p>

              <div className="divPalestrante">

              <img
                       
                  src={

                      objetoStand.palestranteImgSrc === 'mateus'
                          ? mateus
                          : objetoStand.palestranteImgSrc === 'jose'
                          ? jose
                          : ""
                  }
     
     
              />

              </div>

              

              <h2>{objetoStand.palestranteNome}</h2>

              <p>{objetoStand.palestranteFormacao}</p>

            </div>      

        
          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

          <iframe
            className="iframeInscricao"

            src="https://docs.google.com/forms/d/e/1FAIpQLSe6XPugdGbRBwGl4tWtDkMo5xqsuGoZ6rVXQKK9ix6mb5gWiA/viewform?embedded=true"

            

            frameborder="0">
              
              Carregando…
            
            
          </iframe>

        </div>       

        {/* <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button> */}

      </main>


      <Footer />

    </>

  );

};

export default TelaOficina;