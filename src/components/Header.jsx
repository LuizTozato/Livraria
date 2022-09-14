import React from "react"
import './Header.css'

const Header = () => {

    return (
        <div className="header-root">
            <div className="header-texto header-texto-branco">Livraria Jujuba</div>
            <input className="header-input-busca" type="text"></input>
            <div className="display-vertical">
                <div className="header-texto-branco">Olá, bem vindo(a)!</div>
                <div className="header-texto-branco">Entre ou Cadastre-se</div>
            </div>
        </div>
    )

}

export default Header