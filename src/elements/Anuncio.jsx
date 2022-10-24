import './Anuncio.css'

const Anuncio = ({nome, preco, src}) => {

    return (
        <div className="container-anuncio">
            <div className="titulo">{nome}</div>
            <div className='preco'>{preco}</div>
            <img className="livro-img" src={`http://localhost/livraria_backend/uploads/${src}`}/>
            <button className='botao-comprar'>Comprar</button>
        </div>
    )

}

export default Anuncio