import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Section from "../../componentes/Section/Section";

import './style.css';

function TelaPrincipal() {

  return (
    <>

      <Navbar />

      <main>

      <Section

        title="Palestras"
        codEvento= "1"        
      
      />

      <Section
          
          title="Oficinas"
          codEvento= "2"        
        
        />        
  


      </main>
      
      
     


    </>



  );




};

export default TelaPrincipal;