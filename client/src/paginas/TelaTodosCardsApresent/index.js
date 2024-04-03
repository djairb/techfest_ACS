import React from "react";

import './style.css';


import { useLocation, useNavigate } from 'react-router-dom';


import { apresentCardList24, apresentCardList25 } from "../../data/dados";

import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardApresent from "../../componentes/cardApresent/cardApresent";

function TelaTodosCardsApresent() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <>
      <div className="geralTelaTodosCards">

      <Navbar />

      <h1 className="titulo titleApresent">Apresentações</h1>


      <div className="containerTelaTodosCards">

            {apresentCardList24.map((item) => (        
              

              <CardApresent


                id={item.id}
                imgSrc={item.imgSrc}
                titulo={item.titulo}
                local={item.local}
                horario={item.horario}

              />

            
            ))}




      </div>


      <Footer/>

    </div> 



      



     

    

    </>





  );




};

export default TelaTodosCardsApresent;