import React from "react";
import './Home.css'
import Anuncio from "../elements/Anuncio";

const Home = () => {

    return (
        <div className="home-root">
            <div className="anuncio-root">
                <Anuncio nome={"Titulo"} preco={100} src={"63508f42e6179.png"}/>
                
            </div>
        </div>
    )

}

export default Home