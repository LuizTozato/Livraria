import React from "react";
import './Home.css'
import Anuncio from "../elements/Anuncio";

const Home = () => {

    return (
        <div className="home-root">
            <div className="anuncio-root">
                <Anuncio/>
                <Anuncio/>
            </div>
        </div>
    )

}

export default Home