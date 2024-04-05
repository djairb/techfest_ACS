import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaPrincipalCrud from "../paginas/TelaPrincipal - crud";
import TelaPrincipal from "../paginas/TelaPrincipal";
import TelaEvento from "../paginas/TelaEvento";
import TelaUsuario from "../paginas/TelaUser";
import TelaLogin from "../paginas/TelaLogin";
import TelaTodosCardsStand from "../paginas/TelaTodosCardsStand";
import TelaStand from "../paginas/TelaStand";
import TelaTodosCardsApresentacao from "../paginas/TelaTodosCardsApresentacao";
import TelaTodosCardsShow from "../paginas/TelaTodosCardsShow";
import TelaPalestra from "../paginas/TelaPalestra";

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<TelaPrincipal />} />
      <Route exact path='/pagina-crud' element={<TelaPrincipalCrud />} />
      <Route exact path='/tela-evento' element={<TelaEvento />} />
      <Route exact path='/tela-usuario' element={<TelaUsuario />} />
      <Route exact path='/tela-login' element={<TelaLogin />} />
      <Route exact path='/tela-todos-stands' element={<TelaTodosCardsStand />} />
      <Route exact path='/tela-stand' element={<TelaStand />} />
      <Route exact path='/tela-todos-apresentacao' element={<TelaTodosCardsApresentacao />} />
      <Route exact path='/tela-todos-show' element={<TelaTodosCardsShow />} />
      <Route exact path='/tela-palestra' element={<TelaPalestra />} />    




      
    </Routes>
  </HashRouter>
);

export default Rotas;