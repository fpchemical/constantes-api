var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.get('/:simbolo', function(req, res, next) {

const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
const buscaConstante = BuscaConstantePorSimbolo()

  res.json(buscaConstante(req.params.simbolo));
});


router.get('/:simbolo/nome', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.nome);
});

router.get('/:simbolo/valor', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.valor);
});

router.get('/:simbolo/definicao', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.definicao);
});

router.get('/:simbolo/unidade', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.unidade);
});

router.get('/:simbolo/outrasunidades', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.valoresPorUnidade);
});


router.get('/:simbolo/unidade/:indice', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.unidade[req.params.indice]);
});

module.exports = router;
