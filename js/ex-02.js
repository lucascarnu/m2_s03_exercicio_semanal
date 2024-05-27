/*
Crie uma função a qual recebe um valor numérico como parâmetro que irá ser a média; caso a média seja
maior que 7, retorne em um document.write() a seguinte mensagem
“Parabéns você passou na média !”, já, caso a média seja menor que 7,
deve escrever em um document.write() a mensagem “Infelizmente você está de recuperação.”
*/

document.write('<h3>Exercicio 2</h3>');

function mensagemMedia(media) {
  if (media > 7) {
    document.write('Parabéns você passou na média!');
  } else {
    document.write('Infelizmente você está de recuperação.');
  }
}

mensagemMedia(6);
document.write('<br>');
mensagemMedia(7);
document.write('<br>');
mensagemMedia(8);
