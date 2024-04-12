import React from "react";

import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { palestraList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

import henrique from "../../img/palestras/henrique.png";

import andrea from "../../img/palestras/andrea.png";

import mateus from "../../img/palestras/lari-mateus.png";

import moura from "../../img/palestras/moura.png";

function TelaPalestra() {


  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const realizarInscrição = () =>{

  }

  let palestrante = "Palestrante:";

  let palestrantes = "Palestrantes:";

  let mediadora = "Mediadora:";

  let mediador = "Mediador:";



  let objetoStand;

  palestraList.forEach((objeto) => {
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


      <main className="mainTelaPalestra">

        <img className="imagemMain" src={objetoStand.imgSrc} />

        <div className="standTextoPalestra">

          <h1>{objetoStand.titulo}</h1>

          <p>{objetoStand.descricao}</p>

          <div className="palestranteDados">

              <p>{objetoStand.numeroPalestrante > 1 ? palestrantes : palestrante}</p>

              <div className='divPalestrante'>

                <img

    
                  src={

                      objetoStand.palestranteImgSrc === 'mateus'
                          ? mateus
                          : objetoStand.palestranteImgSrc === 'henrique'
                          ? henrique
                          : ""
                  }


                />
              </div>



              <h2>{objetoStand.palestranteNome}</h2>

              <p>{objetoStand.palestranteFormacao}</p>

          </div>

          <div className="palestranteDados">

              <p>{objetoStand.mediadoraGenero > 0 ? mediador : mediadora}</p>

              <div className='divPalestrante'>

                <img

    
                  src={

                      objetoStand.mediadoraImgSrc === 'andrea'
                          ? andrea
                          : objetoStand.mediadoraImgSrc === 'moura'
                          ? moura
                          : ""
                  }


                />
                
              </div>

              <h2>{objetoStand.mediadoraNome}</h2>

              <p>{objetoStand.mediadoraFormacao}</p>

            </div>

         

          

          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

          {/* <iframe className="iframeInscricao" src="https://docs.google.com/forms/d/e/1FAIpQLSdarQ47NfcNIU59uxMQcKU8TgF-VsxeCflZ-oKZ309eAzt1gg/viewform?embedded=true" frameborder="0">Carregando…</iframe>  */}

          

        </div>

              

        {/* <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button> */}


      </main>


      <Footer />

    </>





  );




};

export default TelaPalestra;