import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaPrincipalCrud from "../paginas/TelaPrincipal - crud";
import TelaPrincipal from "../paginas/TelaPrincipal";
import TelaCrud from "../paginas/TelaCRUD";
import TelaEvento from "../paginas/TelaEvento";
import TelaUsuario from "../paginas/TelaUser";
import TelaLogin from "../paginas/TelaLogin";

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<TelaPrincipal />} />
      <Route exact path='/pagina-crud' element={<TelaPrincipalCrud />} />
      <Route exact path='/tela-evento' element={<TelaEvento />} />
      <Route exact path='/tela-usuario' element={<TelaUsuario />} />
      <Route exact path='/tela-login' element={<TelaLogin />} />
    </Routes>
  </HashRouter>
);

export default Rotas;