import React from "react";

import './style.css';


import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";

import CardApresentacao from "../../componentes/CardApresentacao/CardApresentacao";
import { apresentacaoList } from "../../data/dados";

function TelaTodosCardsApresentacao() {

  
  return (

    <>      

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Apresentações Culturais</h1>

        <div className="containerTelaTodosCards">

              {apresentacaoList.map((item) => (
                
                <CardApresentacao

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    artista={item.artista}
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

export default TelaTodosCardsApresentacao;