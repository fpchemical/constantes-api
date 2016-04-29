var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/constante/:simbolo', function(req, res, next) {

const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
const buscaConstante = BuscaConstantePorSimbolo()

  res.json(buscaConstante(req.params.simbolo));
});


router.get('/constante/:simbolo/nome', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.nome);
});

router.get('/constante/:simbolo/valor', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.valor);
});


router.get('/constante/:simbolo/unidade', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.unidade);
});



module.exports = router;
