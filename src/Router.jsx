import React from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Home from "./components/Home";

const Rotas = () => {

    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cadastro' element={<Cadastro/>}/>
        </Routes>
    )

}

export default Rotas