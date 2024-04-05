import React from "react";

import './style.css';


import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import CardApresentacao from "../../componentes/CardApresentacao/CardApresentacao";
import { apresentacaoList, lazerList, palestraList, showList } from "../../data/dados";
import CardShow from "../../componentes/CardShow/CardShow";
import CardPalestra from "../../componentes/CardPalestra/CardPalestra";
import CardLazer from "../../componentes/CardLazer/CardLazer";

function TelaTodosCardsLazer() {

  
  return (

    <>      

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Palestras</h1>

        <div className="containerTelaTodosCards">

              {lazerList.map((item) => (
                
                <CardLazer

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

export default TelaTodosCardsLazer;