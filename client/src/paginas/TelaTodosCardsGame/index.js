import React from "react";

import './style.css';


import { useLocation, useNavigate } from 'react-router-dom';


import {gameList, standList} from "../../data/dados";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardStand from "../../componentes/CardStand/CardStand";
import CardGame from "../../componentes/CardGame/CardGames";

function TelaTodosCardsGame() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <>      

      <Navbar />

      <main className="mainTelaStandTodos">

        <h1 className="titulo titleApresent">Disputa de Games</h1>

        <div className="containerTelaTodosCards">

              {gameList.map((item) => (
                
                <CardGame

                    id={item.id}
                    imgSrc={item.imgSrc}
                    titulo={item.titulo}
                    local={item.local}
                    data={item.data}
                    horario={item.horario}
                    tipoGame={item.tipoGame}                 
                
                
                />
                

              
              ))}

        </div>

      </main>      


      <Footer/>

    
    

    </>

  );

};

export default TelaTodosCardsGame;