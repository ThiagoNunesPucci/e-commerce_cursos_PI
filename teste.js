const { Cadastro } = require('./models')

async function app() {
const novoCadastro = await Cadastro.create({
    usuario: "teste22",
    email: "teste@teste.com",
    senha: "teste22"
})
console.log('id do usuario criado' + novoCadastro.id)
}

app()