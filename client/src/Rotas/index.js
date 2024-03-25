import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import TelaPrincipalCrud from "../paginas/TelaPrincipal - crud";
import TelaPrincipal from "../paginas/TelaPrincipal";
import TelaCrud from "../paginas/TelaCRUD";
import TelaEvento from "../paginas/TelaEvento";

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<TelaPrincipal />} />
      <Route exact path='/pagina-crud' element={<TelaPrincipalCrud />} />
      <Route exact path='/tela-evento' element={<TelaEvento />} />
    </Routes>
  </HashRouter>
);

export default Rotas;