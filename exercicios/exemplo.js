// Importando a biblioteca 'readline-sync' para obter entradas do usuário
const readlineSync = require('readline-sync');

// Armazenando o limite de velocidade em km/h
const limiteVelocidade = readlineSync.question("Entre com o limite de velocidade: ");

// Armazenando a velocidade do automóvel registrada pelo sensor
const velocidadeRegistrada = readlineSync.question("Entre com a velocidade registrada pelo sensor: ");

// Verificando se a velocidade excedeu o limite de velocidade
if (parseInt(velocidadeRegistrada) > parseInt(limiteVelocidade)) {
  console.log("Velocidade acima do permitido. O condutor poderá ser multado!");
} else {
  console.log("A velocidade está dentro do limite permitido.");
}