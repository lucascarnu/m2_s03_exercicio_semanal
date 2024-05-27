/*
Pensando em um sistema de notas online, crie um código que irá capturar o nome da matéria e as suas
quatro notas; deve ser usado um prompt dentro de uma laço while, para capturar apenas as notas.
A ideia é que, a cada valor digitado no prompt, ele seja adicionado a um array e este irá ser o
valor de uma propriedade de um objeto. Observe o fluxo:

Exemplo: Digito o nome da matéria -> Digito as 4 notas -> montar o seguinte objeto:

{
  nomeMateria: “Matemática”,
  notas: [10,6,8,9],
}

Após isso, crie um laço “for” que irá calcular a média de todos os itens da propriedade notas;
pode ser utilizado o método criado no exercício 01, o resultado será o retorno dessa função.
*/
document.write('<h3>Exercicio 6</h3><p>No console</p>');

let materiaNome = window.prompt('Nome da matéria: ');

let num = 1;
let notas = [];

while (num <= 4) {
  let nota = window.prompt('Digite a nota ' + num + ': ');
  notas.push(Number(nota));
  num++;
}

let materia = {
  nomeMateria: materiaNome,
  notas: notas,
};

console.log(materia); // imprime objeto em consola

// função para calcular a média do exercicio 1

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;
  return media;
}

console.log('Media: ', calcularMedia(materia.notas));
