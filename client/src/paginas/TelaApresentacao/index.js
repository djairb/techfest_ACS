import React, { useState } from "react";

import './style.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { apresentacaoList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";

import cirandaCabloco from "../../img/culturais/cirandaCabloco.png";

import touLigado from "../../img/culturais/touLigado.png";

import uniaoBh from "../../img/culturais/uniaoBh.png";

import cedili from "../../img/culturais/cedili.png";

import cavaloMarinho from "../../img/culturais/cavaloMarinho.png";


function TelaApresentacao() {


  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const realizarInscrição = () =>{

  }


  let objetoStand;

  apresentacaoList.forEach((objeto) => {
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

          <div className="palestranteDados">              

              <div className="divPalestrante">

                <img


                        
                    src={


                        objetoStand.tipoApresen === 'touLigado'
                            ? touLigado
                            : objetoStand.tipoApresen === 'cirandaCabloco'
                            ? cirandaCabloco
                            : objetoStand.tipoApresen === 'uniaoBh'
                            ? uniaoBh
                            : objetoStand.tipoApresen === 'cavaloMarinho'
                            ? cavaloMarinho
                            : objetoStand.tipoApresen === 'cedili'
                            ? cedili
                            : ""
                    }
      
      
                />

              </div>              

              <h2>{objetoStand.titulo}</h2>

              <h3>{objetoStand.artista}</h3>

              <p>{objetoStand.descricao}</p>

            </div>      

        
          <p>Local: {objetoStand.local}, {objetoStand.data}, {objetoStand.horario}.</p>

          <Link className="apresentacaoDetalhes" to={objetoStand.urlLink}>Saiba mais</Link>  


        
         

        </div>

            

        {/* <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button> */}

        

      </main>


      <Footer />

    </>

  );

};

export default TelaApresentacao;