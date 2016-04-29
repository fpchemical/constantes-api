module.exports = function() {


  const grandezas = {
    g: require('./g'),
    R: require('./R'),
    P0: require('./P0'),
    e: require('./e'),
    k: require('./k'),
    F:require('./F'),
    h: require('./h'),
    m: require('./m'){
      nome: 'Massa em repouso do elétron', 
      valor: '9.110*10^-31', 
      unidade: ['Kg'],
      definicao: require('./descricaoConstanteMassaEletron')
    },
    NA: require('./R'){
      nome: 'Número de avogadro', 
      valor: '6.022*10^23', 
      unidade: ['mol'],
      definicao: require('./descricaoConstanteAvogadro')
    },
    c: require('./R'){
      nome: 'Velocidade da luz no vácuo', 
      valor: '299792458', 
      unidade: ['m/s'],
      definicao: require('./descricaoConstanteVelocidadeLuz')
    },
    Vmol: require('./R'){
      nome: 'Volume molar padrão dos gases ideais', 
      valor: '22.41*10^-3', 
      unidade: ['L/mol'],
      definicao: require('./descricaoConstanteVolumeMolarGasesIdeais')
    },
    T0: require('./R'){
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

