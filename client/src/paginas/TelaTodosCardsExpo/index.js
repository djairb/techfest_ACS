import React from "react";

import './style.css';


import { useLocation, useNavigate } from 'react-router-dom';


import { expoCardList } from "../../data/dados";


import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import CardExpo from "../../componentes/cardExpo/cardExpo";

function TelaTodosCardsExpo() {

  
  const location = useLocation();

  const navigate = useNavigate();
  // Obtém o dado do state

  return (

    <>
      <div className="geralTelaTodosCards">

      <Navbar />


      <div className="containerTelaTodosCards">

            {expoCardList.map((item) => (        
              

              <CardExpo

                  id={item.id}
                  imgSrc={item.imgSrc}
                  titulo={item.titulo}
                  responsavel={item.responsavel}                            
              />

            
            ))}




      </div>


      <Footer/>

    </div> 



      



      {/* <div className="containerTelaEvento">

      <img src={objetoEvento.imgSrc} />

      <h1>{objetoEvento.title}</h1>

      <p>{objetoEvento.descricao}</p>

      <button onClick={realizarInscrição} className="botaoInscrever">Se Inscrever</button>

    </div> */}

    

    </>





  );




};

export default TelaTodosCardsExpo;