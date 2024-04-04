import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";


import './style.css';




import Footer from "../../componentes/Footer/Footer";


import CardLocation from "../../componentes/cardLocation/cardLocation";
import MainHome from "../../componentes/MainHome/MainHome";



import Apoio from "../../componentes/apoio/Apoio";
import StandSection from "../../componentes/StandSection/StandSection";
import ApresentacaoSection from "../../componentes/ApresentacaoSection/ApresentacaoSection";


function TelaPrincipal() {

  
  // const newUser = {
  //   nome: "Djair",
  //   id: 550
  // }

  // toggleUser(newUser); 

  return (

    <>


      <Navbar />


      <main>

        <MainHome />

        <StandSection

          title="Stands"
        
        
        />


        <ApresentacaoSection

          title="Apresentações Culturais"
        
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