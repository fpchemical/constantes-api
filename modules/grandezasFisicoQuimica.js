module.exports = function() {


  const grandezas = {
    g: require('./constantes/g'),

     R: {
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
    },

    P0: {
      nome: 'Atmosfera padrão', 
      valor: '1.013*10^5', 
      unidade: ['Pa', 'atm'],
      definicao: require('./descricaoConstanteAtmosferaPadrao')
    },
    e: {
      nome: 'Carga elementar', 
      valor: '1.602*10^-19', 
      unidade: ['C'],
      definicao: require('./descricaoConstanteCargaEletron')
    },
    k: {
      nome: 'Constante de Boltzmann', 
      valor: '1.381*10^-23', 
      unidade: ['J/K'],
      definicao: require('./descricaoConstanteBoltzmann')
    },
    F: {
      nome: 'Constante de Faraday', 
      valor: '9.648*10^4', 
      unidade: ['C/mol'],
      definicao: require('./descricaoConstanteFaraday')
    },
    h: {
      nome: 'Constante de Planck', 
      valor: '6.626*10^-34', 
      unidade: ['J*s'],
      definicao: require('./descricaoConstantePlanck')
    },
    m: {
      nome: 'Massa em repouso do elétron', 
      valor: '9.110*10^-31', 
      unidade: ['Kg'],
      definicao: require('./descricaoConstanteMassaEletron')
    },
    NA: {
      nome: 'Número de avogadro', 
      valor: '6.022*10^23', 
      unidade: ['mol'],
      definicao: require('./descricaoConstanteAvogadro')
    },
    c: {
      nome: 'Velocidade da luz no vácuo', 
      valor: '299792458', 
      unidade: ['m/s'],
      definicao: require('./descricaoConstanteVelocidadeLuz')
    },
    Vmol: {
      nome: 'Volume molar padrão dos gases ideais', 
      valor: '22.41*10^-3', 
      unidade: ['L/mol'],
      definicao: require('./descricaoConstanteVolumeMolarGasesIdeais')
    },
    T0: {
      nome: 'Zero da escala Celsius', 
      valor: '273.15', 
      unidade: ['K'],
      definicao: require('./descricaoConstanteZeroCelsiusEmKelvin')
    }

  };
  const procuraConstantePorSimbolo = (simbolo) => {
    if(simbolo in grandezas){ return  grandezas[simbolo] }
     
  };
  return procuraConstantePorSimbolo;
};

