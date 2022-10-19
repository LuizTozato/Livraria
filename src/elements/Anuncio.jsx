import './Anuncio.css'

const Anuncio = () => {

    return (
        <div className="container-anuncio">
            <div className="titulo">Título do Livro</div>
            <div className='preco'>Preço: R$00.00</div>
            <img className="livro-img" src="http://localhost/livraria_backend/uploads/633b728113cc8.png"/>
            <button className='botao-comprar'>Comprar</button>
        </div>
    )

}

export default Anuncio