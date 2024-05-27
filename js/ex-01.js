/*
Crie uma variável que irá receber como valor um array de 4 notas. Após isso,
crie uma função que irá calcular a média dessas 4 notas. Deverá ser passado a variável que recebe
o array de notas como parâmetro da função.

Utilize o laço ‘for’ para o cálculo.
*/

document.write('<h3>Exercicio 1</h3><p>No console</p>');
console.log('Exercicio 1');

// ‘for’

let notas = [8, 6, 10, 8];

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;
  return media;
}

console.log('Media: ', calcularMedia(notas));

// ‘forEach’

// let notas = [8, 6, 10, 8];

// function calcularMedia(array) {
//   let soma = 0;
//   let media = 0;

//   array.forEach((elemento, indice) => {
//     soma += elemento;
//     if (indice === array.length - 1) {
//       media = soma / array.length;
//     }
//   });

//   return media;
// }

// let media = calcularMedia(notas);

// console.log('Media: ', media);
