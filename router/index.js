var express = require('express');
var router = express.Router();
const {Cadastro} = require('../models')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', function(req, res, next){
  const usuarioLogin = await Cadastro.findOne({
    where: {
      email: req.body.email
    }
  })

  if(usuarioLogin.senha == req.body.senha) {
    req.session.estaLogado = true
    req.session.usuarioLogado = usuarioLogin
    res.redirect('/home')
  } else{
    res.render('erro-validacao', {mensagemErro:'Senha invalida'})
  }

})


module.exports = router;
