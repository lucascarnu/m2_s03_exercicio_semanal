/*
Crie uma função que recebe um array de números e retorna o maior número dentre eles; para isso,
utilize um qualquer laço de repetição.
*/

document.write('<h3>Exercicio 7</h3><p>No console</p>');

function retornaMaiorNumero(lista) {
  let maiorNum = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maiorNum) {
      maiorNum = lista[i];
    }
  }
  return maiorNum;
}

let listaNum = [10, 5, 3, 12, 14, 7, 18, 23, 6, 13, 29, 30, 1, 9, 44, 37, 26];
console.log(retornaMaiorNumero(listaNum)); // Saída: 44

/* outro método */

//   function retornaMaiorNumero(lista) {
//     return Math.max(...lista);
//   }

//   let listaNum = [10, 5, 3, 12, 14, 7, 18, 23, 6, 13, 29, 30, 1, 9, 44, 37, 26];
//   console.log(retornaMaiorNumero(listaNum));

/*
O operador de espalhamento (ou operador spread) em JavaScript é representado por três pontos (...).
Ele permite que um objeto iterável, como um array ou uma string, seja expandido em elementos individuais.
Esse operador é muito útil em diversas situações, como quando se deseja copiar arrays, concatenar arrays,
ou, como no seu exemplo, passar elementos de um array como argumentos individuais para uma função.
  */
