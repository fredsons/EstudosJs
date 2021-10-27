/*
// ARRAYS E LOOPS

// ARRAY

* É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma unica variavel.

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0] // Switch
videoGames[2] // Xbox

* Acesse um elemento do array utilizando [n]

// MÉTODOS E PROPRIEDADES DE UMA ARRAY

var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop(); // Remove o ultimo item e retorna ele 
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.lenght; // 3

* Existem diversos outros metodos, como map, reduce, forEach e mais que veremos mais a frente

// FOR LOOP

* Fazem algo repetidamente até que uma condição seja atingida 

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// Retorna de 0 a 9 no console

* O for loop possui 3 partes, inicio, condição e incremento

// WHILE LOOP

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

* Retorna de 0 a 9 no console
* O for loop é o mais comun

// ARRAYS E LOOPS

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.lenght; i++) {
  console.log(videosGames[i]);
}

* O for loop é o mais comun

// BREAK

* O loop irá parar caso encontre a palavra break

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.lenght; i++) {
  console.log(videosGames[i]);
  if(videosGames[i] === 'PS4') {
    break;
  }
}


// FROEACH

* forEach é um método que executa uma função para cada item da Array.
É uma forma mais simples de utilizarmos um lop com arrays (ou array-like)

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});

// O argumento item será atribuido dinamicamente 
// Podemos passar os seguintes parâmetros: item, index, array

// NÃO SE CONFUNDA COM A SITAXE

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

// Não aconselho ecrever da forma acima, mas funciona normalmente


// EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa  1959, 1962, 1970, 1994, 2002

var vitorias = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for ( var i = 0; i < vitorias.lenght; i++) {
  console.log(`O brasil foi campeão em ${vitorias[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.lenght; fruta++) {
  console.log(frutas[fruta]);
  if(frutas[fruta] === 'Pera') {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.

var ultimaFruta = frutas[frutas.lenght - 1];



















































*/
