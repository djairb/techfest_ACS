import React from "react";

import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { oficinaList, palestraList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

function TelaOficina() {


  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const realizarInscrição = () =>{

  }



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

          <div className="palestranteContainer">

            <div className="divImagem">

              <img className="palestranteImagem" src={objetoStand.palestranteImgSrc} />

            </div>            

            <div className="palestranteDados">

              <p>Palestrante:</p>

              <h2>{objetoStand.palestranteNome}</h2>

              <p>{objetoStand.palestranteFormacao}</p>

            </div>

          </div>

        

          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>          

        </div>       

        <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button>

      </main>


      <Footer />

    </>

  );

};

export default TelaOficina;