/*
Utilizando estrutura de repetição for, realize a tabuada do número 8 e exibe em tela da seguinte forma:
8 x 0 = 0
8 x 1 = 8
8 x 2 = 16
....
8 x 10 = 80
*/

document.write('<h3>Exercicio 4</h3>');

let multiplicando = 8;

for (let i = 0; i <= 10; i++) {
  let resultado = 0;
  resultado = multiplicando * i;
  document.write('<br/>', multiplicando + ' x ' + i + ' = ' + resultado);
}
