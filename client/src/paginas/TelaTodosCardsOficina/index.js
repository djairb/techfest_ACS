import React from "react";

import './style.css';


import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import { oficinaList } from "../../data/dados";

import CardOficina from "../../componentes/CardOficina/CardOficina";

function TelaTodosCardsOficina() {
  
  return (

    <>     

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Oficinas</h1>

        <div className="containerTelaTodosCards">

              {oficinaList.map((item) => (
                
                <CardOficina

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    palestranteNome={item.palestranteNome}
                    local={item.local}
                    data={item.data}
                    horario={item.horario}
                    palestranteImgSrc={item.palestranteImgSrc}                
                
                />                      

              
              ))}

        </div>

      </main>      


      <Footer/>

    
    

    </>

  );

};

export default TelaTodosCardsOficina;