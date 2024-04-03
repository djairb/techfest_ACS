import React from "react";
import Navbar from "../../componentes/Navbar/Navbar";
import Section from "../../componentes/Section/Section";

import './style.css';

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";
import Footer from "../../componentes/Footer/Footer";
import CardStand from "../../componentes/cardStand/cardStand";

import CardLocation from "../../componentes/cardLocation/cardLocation";
import MainHome from "../../componentes/MainHome/MainHome";

import bgMain from "../../img/bg-main.jpg";

import { Background } from "react-image";
import ExpoSection from "../../componentes/ExpoSection/ExpoSection";
import Apoio from "../../componentes/apoio/Apoio";
import ApresentSection from "../../componentes/ApresentSection/ApresentSection";

function TelaPrincipal() {

  const { user, toggleUser } = useContext(UserContext);


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


        <ExpoSection

          title="Exposições - Stands"

        />

        <ApresentSection

          title="Programação Multicultural"
          subTitle="24 de Abril"
          data="24"



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