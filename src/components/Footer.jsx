import './Footer.css'

const Footer = () => {

    function irPara(endereco){
        window.location.href = ("/" + endereco)
    }

    return (
        <div className='footer-root'>
            <a href='/'>Home</a> |
            <a href='/cadastrar'>Cadastrar Novo Livro</a>
        </div>
    )

}

export default Footer