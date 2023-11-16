import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import Equipe from "./components/Equipe";
import Usuario from "./components/Usuario";
import Store from "./components/Store";
import ONG from "./components/ONG";
import LojaLeao from "./components/LojaLeao";
import LojaOnca from "./components/LojaOnca";
import LojaLeopardo from "./components/LojaLeopardo";
import LojaTigre from "./components/LojaTigre";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Pagamento from "./components/Pagamento";
import CompraUnico from "./components/CompraUnico";
import CompraDupla from "./components/CompraDupla";


function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Equipe />} path="/equipe" />
                <Route element={<Usuario />} path="/usuario" />
                <Route element={<Store />} path="/store" />
                <Route element={<ONG />} path="/ong" />
                <Route element={<LojaLeao />} path="/lojaLeao" />
                <Route element={<LojaOnca />} path="/lojaOnca" />
                <Route element={<LojaLeopardo />} path="/lojaLeopardo" />
                <Route element={<LojaTigre />} path="/lojaTigre" />
                <Route element={<Cadastro />} path="/cadastro" />
                <Route element={<Login />} path="/login" />
                <Route element={<Pagamento />} path="/pagamento" />
                <Route element={<CompraDupla />} path="/compraDupla" />
                <Route element={<CompraUnico/>} path="/compraUnico" />
              

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;