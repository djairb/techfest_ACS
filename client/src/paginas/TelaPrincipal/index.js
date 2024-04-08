import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";


import './style.css';




import Footer from "../../componentes/Footer/Footer";


import CardLocation from "../../componentes/cardLocation/cardLocation";
import MainHome from "../../componentes/MainHome/MainHome";



import Apoio from "../../componentes/apoio/Apoio";
import StandSection from "../../componentes/StandSection/StandSection";
import ApresentacaoSection from "../../componentes/ApresentacaoSection/ApresentacaoSection";
import ShowSection from "../../componentes/ShowSection/ShowSection";
import PalestraSection from "../../componentes/PalestraSection/PalestraSection";
import OficinaSection from "../../componentes/OficinaSection/OficinaSection";
import GameSection from "../../componentes/GameSection/GameSection";
import LazerSection from "../../componentes/LazerSection/LazerSection";


function TelaPrincipal() {

  
  // const newUser = {
  //   nome: "Djair",
  //   id: 550
  // }

  // toggleUser(newUser); 

  return (

    <>   

      <main>

        <Navbar/>

        <MainHome />

        <PalestraSection

          title="Palestras"
        
        />

        <OficinaSection

          title="Oficinas"
        
        />     
       
        <StandSection

          title="Exposições em Stands"        
        
        />

        <GameSection

          title="Disputa de Games"
        
        />


        <ApresentacaoSection

          title="Apresentações Culturais"
        
        />

        <ShowSection

          title="Shows"
        
        />

        <LazerSection

          title="Atividades de esporte, lazer e 
          cidadania"
        
        
        
        />      


        <CardLocation

          title="Localização"

        />

        <Apoio />


      </main>









      {/* add location
       */}

      <Footer />

    </>

  );

};

export default TelaPrincipal;