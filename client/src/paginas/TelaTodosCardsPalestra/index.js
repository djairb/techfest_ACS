import React from "react";

import './style.css';


import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import CardApresentacao from "../../componentes/CardApresentacao/CardApresentacao";
import { apresentacaoList, showList } from "../../data/dados";
import CardShow from "../../componentes/CardShow/CardShow";
import CardPalestra from "../../componentes/CardPalestra/CardPalestra";

function TelaTodosCardsShow() {

  
  return (

    <>      

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Palestras</h1>

        <div className="containerTelaTodosCards">

              {showList.map((item) => (
                
                <CardPalestra

                    id={item.id}
                    imgSrc={item.imgSrc}
                    nomeArtista={item.nomeArtista}
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

export default TelaTodosCardsShow;