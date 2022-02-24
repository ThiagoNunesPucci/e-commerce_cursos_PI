const { Cadastro } = require('./models')

async function app() {
//const novoCadastro = await Cadastro.create({
  //  usuario: "teste",
 //   email: "teste@teste.com",
 //   senha: "teste"
//})
//console.log('id do usuario criado' + novoCadastro.id)

const usuario = await Cadastro.findByPk(7)
console.log('nome do cadastro:' + usuario.usuario)
}

app()