module.exports = {
  nome: 'Constante Universal dos Gases', 
  valor: {
    verdadeiro:'0.082', 
    unidade: 'atm*L/K*mol'
  },
  valoresPorUnidade: [
    {'J': { valor: '8.4314598', unidade: 'J/K*mol'}},
    {'m': { valor: '8.20574587*10^−5 ', unidade: 'm^3*atm/K*mol'}},
    {'cal': { valor: '1,987', unidade: 'cal/K*mol'}}
  ],
  definicao: require('./descricaoConstanteUniversaldosGases')
}