import React, {useState} from "react";
import './Home.css'
import Anuncio from "../elements/Anuncio";
import { DB_HOST_NAME } from "../utils/Api";
import axios from "axios";

const Home = () => {

    const [livros, setLivros] = useState([])

    axios.get(DB_HOST_NAME)
        .then(resp => setLivros(resp.data.dados[0]))


    function listarLivros(){
        return livros.map(livro => 
            <div key={livro.id_livro}>
                <Anuncio nome={livro.nome} preco={livro.preco} src={livro.path_img}/>
            </div>
        )
    }

    return (
        <div className="home-root">
            <div className="anuncio-root">
                {listarLivros()}
            </div>
        </div>
    )

}

export default Home