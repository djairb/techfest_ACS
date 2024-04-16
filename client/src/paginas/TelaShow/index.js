import React, { useState } from "react";

import './style.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';


import Navbar from "../../componentes/Navbar/Navbar";


import { showList } from "../../data/dados";
import Footer from "../../componentes/Footer/Footer";


import nzambi from "../../img/culturais/nzambi.png";


function TelaShow() {


  const location = useLocation();

  const navigate = useNavigate();

  // Obtém o dado do state
  const dado = location.state;

  const realizarInscrição = () =>{

  }


  let objetoStand;

  showList.forEach((objeto) => {
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

                        objetoStand.tipoApresen === 'nzambi'
                            ? nzambi
                            : ""
                    }
      
      
                />

              </div>              

              <h2>{objetoStand.nomeArtista}</h2>

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

export default TelaShow;