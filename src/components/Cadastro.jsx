import React, {useState, useEffect} from "react";
import './Cadastro.css';
import axios from "axios";
import { DB_HOST_NAME } from "../utils/Api";

const Cadastro = () => {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()    

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        console.log(objectUrl)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    
    }, [selectedFile])

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("nome_livro", nome)
        formData.append("preco_livro", preco)

        formData.append(
            "meu_arquivo",
            selectedFile
        )

        //console.log(selectedFile)
        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        axios.post(DB_HOST_NAME, formData)
        .then(resp => console.log(resp))

    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }    

    return (
        <div className="cadastro-root">
            <div className="cadastro-form">

                <b><label>Digite abaixo as informações do novo livro:</label></b>
                <input type="text" placeholder="Nome do livro" onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder="Preço" onChange={e => setPreco(e.target.value)}/>
                <div>
                    <i><label>Foto de capa do livro:</label></i>
                    <input type="file" name="imagem_livro" onChange={onSelectFile}/>
                </div>
                
                {selectedFile &&  <img className="pre_visualizacao" src={preview} />}
                <button onClick={handleSubmit}>Enviar</button>

            </div>
        </div>
    )
}

export default Cadastro