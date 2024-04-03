import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaPrincipalCrud from "../paginas/TelaPrincipal - crud";
import TelaPrincipal from "../paginas/TelaPrincipal";
import TelaEvento from "../paginas/TelaEvento";
import TelaUsuario from "../paginas/TelaUser";
import TelaLogin from "../paginas/TelaLogin";
import TelaTodosCards from "../paginas/TelaTodosCardsExpo";
import TelaTodosCardsExpo from "../paginas/TelaTodosCardsExpo";
import TelaExpo from "../paginas/TelaExpo";
import TelaTodosCardsApresent from "../paginas/TelaTodosCardsApresent";

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<TelaPrincipal />} />
      <Route exact path='/pagina-crud' element={<TelaPrincipalCrud />} />
      <Route exact path='/tela-evento' element={<TelaEvento />} />
      <Route exact path='/tela-usuario' element={<TelaUsuario />} />
      <Route exact path='/tela-login' element={<TelaLogin />} />
      <Route exact path='/tela-expo' element={<TelaExpo />} />
      <Route exact path='/pagina-todos-cards-expo' element={<TelaTodosCardsExpo />} />
      <Route exact path='/pagina-todos-cards-apresent' element={<TelaTodosCardsApresent />} />




      
    </Routes>
  </HashRouter>
);

export default Rotas;