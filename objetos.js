/*

// OBJETOS
* Conjunto de variáveis e funções, que são chamdas de propriedades e metodos

var pessoa = {
nome: 'Fred',
idade: 31,
profissão: Designer,
possuiFaculdade: true
}

pessoa.nome; // 'Fred'
pessoa.possuiFaculdade: true

* Propriedades e metodos consistem em nome (chave) e valor


// Métodos

* É uma propriedade que possui uma função no local do seu valor

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

* Abreviação de area: function() {} para area() {}, no ES6+

// ORGANIZAR O CÓDIGO

* Objetos servem para organizar o codigo em pequenas partes reutilizáveis.

Math.PI; 3,14
Math.random(); // 3.14

Math é um objeto nativo do JavaScript. Já percebeu que console é um objeto e log() um metodo ?!

// CRIAR UM OBJETO

Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'


// DOT NOTATION GET

* Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E'
}
var bg = menu.backgroundColor; // '#84E'


// DOT NOTATION SET

* Substitua o valor o valor de uma propriedade utilizando . e o = após o nome da mesma

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

// ADICIONAR PROPRIEDADES E MÉTODOS

* Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed'; 

// PALAVRA-CHAVE THIS

* this ira fazer uma referência ao proprio objeto.


var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHaeight(); // 25
// sem o this, seria 60

* this ira retornar o proprio objeto

// PROTÓTIPO E HERANÇA

* O objeto herda propriedades e metodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty ('width') // true
menu.hasOwnProperty ('height') // false

hasOwnProperty é um método de Object


// EXERCÍCIO

// Crie um objeto com os seus dados pessoais,  Deve possuir pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Fred',
  sobrenome: 'Sousa'
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}





// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;





// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homen') {
      return 'latir';
    } else {
      return 'Nada';
    }
  }
}

























































*/
