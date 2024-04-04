import React from "react";

import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { standList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

function TelaStand() {

  const realizarInscrição = () => {


  }

  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;



  let objetoStand;

  standList.forEach((objeto) => {
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


      <main className="mainTelaStand">

        <img src={objetoStand.imgSrc} />

        <div className="standTexto">

          <h1>{objetoStand.titulo}</h1>

          <h2>{objetoStand.subtitulo}</h2>

          <p>{objetoStand.descricao}</p>

        </div>       

        <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button>


      </main>


      <Footer />

    </>





  );




};

export default TelaStand;