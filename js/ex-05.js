/*
Desenvolva um código JavaScript que faça o seguinte:

1- Faça as seguintes 5 perguntas ao usuário:

Qual o nome do aluno?
Qual a idade do aluno?
Qual a série do aluno?
Qual o nome da escola?
Qual a sua matéria favorita?

2- Utilize o método confirm() do JavaScript para perguntar ao usuário se ele confirma os
   dados inseridos (isso apenas ao final das 5 perguntas).

4- Se o usuário confirmar, exiba todas as informações do aluno na tela utilizando o método
   document.write().

5- Caso ele não aceite o programa, deve ser encerrado e nada deve ser feito. apenas mostre
   uma mensagem de que os dados não foram confirmado.
*/

document.write('<h3>Exercicio 5</h3>');

let nome = window.prompt('Qual o nome do aluno?');
let idade = window.prompt('Qual a idade do aluno?');
let serie = window.prompt('Qual a série do aluno?');
let escolaNome = window.prompt('Qual o nome da escola?');
let materiaFavorita = window.prompt('Qual a sua matéria favorita?');

let confirmacao = window.confirm(
  `Confirma os dados inseridos?\n\n` +
    `Nome: ${nome}\n` +
    `Idade: ${idade}\n` +
    `Série: ${serie}\n` +
    `Nome da escola: ${escolaNome}\n` +
    `Matéria favorita: ${materiaFavorita}`
);

if (confirmacao) {
  document.write(`Dados confirmados:<br>`);
  document.write(`Nome: ${nome}<br>`);
  document.write(`Idade: ${idade}<br>`);
  document.write(`Série: ${serie}<br>`);
  document.write(`Nome da escola: ${escolaNome}<br>`);
  document.write(`Matéria favorita: ${materiaFavorita}<br>`);
} else {
  document.write('Dados não confirmados.');
}
