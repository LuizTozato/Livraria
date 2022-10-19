export const DB_HOST_NAME = 'http://localhost/livraria_backend/'

export default {

    async enviar (metodoRequisicao, id_livro='', nome='', path_img='') {

        // metodo:
        // 'POST' -> criar 1 único livro OU obter os registros de 1 único livro por id
        // 'PUT' -> update,
        // 'DELETE' -> delete

        //montando o objeto livro
        let livro = {
            id_livro,
            nome,
            path_img
        }

        //como vou enviar:
        let requisicao = {
            method: metodoRequisicao,
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(livro)
        }

        console.log(requisicao)

        //o que retorna:
        const response = await fetch(DB_HOST_NAME, requisicao)
        const data = await response.json()
        console.log(data)
        return data

    },

    async enviarGet ( busca, offset, limit = 10) {

        //acao = 'GET' -> read all

        //como vou enviar:
        let requisicao = {
            method: "GET",
            headers: {'Content-Type' : 'application/json'}
        }

        console.log(requisicao)

        //o que retorna:
        const response = await fetch('http://localhost/newm/?' + new URLSearchParams({
            busca,
            offset,
            limit
        }), requisicao)
        const data = await response.json()
        console.log(data)
        return data

    }
}