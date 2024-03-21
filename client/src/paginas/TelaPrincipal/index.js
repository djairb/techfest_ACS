import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Section from "../../componentes/Section/Section";

import './style.css';

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

function TelaPrincipal() {

  const {user, toggleUser} = useContext(UserContext);


  // const newUser = {
  //   nome: "Djair",
  //   id: 550
  // }

  // toggleUser(newUser);

 

  

  

  return (
    <>

    <h1>{user.nome}</h1>
    

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