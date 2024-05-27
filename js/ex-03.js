/*
Agora, crie uma função javascript que irá receber uma variável como parâmetro; ela será um array de
nomes de alguns alunos (pode ser nomes aleatórios). Através do método de array forEach(),
imprima em tela (com document.write) todos os nomes do array, um abaixo do outro.
*/

document.write('<h3>Exercicio 3</h3>');

let alunosNomes = [
  'Regina',
  'Marcela',
  'Gracia',
  'Ray',
  'Andre',
  'Lucas',
  'João',
  'Pedro',
];

alunosNomes.forEach(imprimirNomes);

function imprimirNomes(nome) {
  document.write('</br>', nome);
}

/* com arrow function */

// let alunosNomes = [
//   'Regina',
//   'Marcela',
//   'Gracia',
//   'Ray',
//   'Andre',
//   'Lucas',
//   'João',
//   'Pedro',
// ];

// alunosNomes.forEach((nome) => {
//   document.write('</br>', nome);
// });
