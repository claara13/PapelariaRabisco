// Importamos a biblioteca Axios
import axios from 'axios'
// Criamos uma instância do Axios com a configuração da baseURL, que é o endereço principal do nosso servidor.
const api = axios.create({baseURL: 'https://reqres.in'})
// Definimos uma função assíncrona chamada getProdutos, que vai buscar a lista de produtos do servidor.
export async function getFuncionarios(){
    try {
        // Dentro do bloco try, fazemos uma requisição GET para o endpoint '/produto'.
        const response = await api.get('/api/users?page=2')
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data.data

    } catch (error) {
    // Se houver um erro na requisição, capturamos esse erro no bloco catch.
    // Nesse caso, registramos uma mensagem de erro no console. console.error('Erro ao buscar produtos: ${error.message}`)
    }
}