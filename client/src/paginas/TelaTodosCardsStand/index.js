import React from "react";

import './style.css';


import { useLocation, useNavigate } from 'react-router-dom';


import {standList} from "../../data/dados";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardStand from "../../componentes/CardStand/CardStand";

function TelaTodosCardsStand() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <>      

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Stands</h1>

        <div className="containerTelaTodosCards">

              {standList.map((item) => (
                
                <CardStand

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    subtitulo={item.subtitulo}
                    local={item.local}
                    data={item.data}
                    horario={item.horario}                              
                />
                

              
              ))}

        </div>

      </main>      


      <Footer/>

    
    

    </>

  );

};

export default TelaTodosCardsStand;