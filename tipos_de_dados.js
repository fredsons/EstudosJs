
// TIPOS DE DADOS

/*
    7 Tpos de dados
    * Todos são primitivos exceto os objetos.

    EX:
    var nome = 'Fredson'; String
    var idade = 31; Number
    var possuiFaculdade = true; // Boolean
    var time; // Undefined
    var comida = null; // Null
    var simbolo = Symbol() // Symbol 
    var novoObjeto = {} // Object

    * Primitivos são dados imutaveis.

    VERIFICAR TIPO DE DADO

    EX:
    var nome = 'Fredson';
    console.log(typeof nome);
    // retorna string
    // type of null retorna object


    STRING
    * Você pode somar uma string e assim concatenar as palavras.

    EX:
    var nome = 'Fredson';
    var sobrenome = 'Sousa' ;
    var nomeCompleto = nome + ' ' + sobrenome;

    * Você pode somar números com strings, o resultado final é sempre uma string.

    EX:
    var gols = 1000;
    var frase = 'Romário fez '  + gols + ' gols';

    ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
    
    'JavaScript é "super" fácil';
    "JavaScript é 'super' fácil";
    "JavaScript é \"super\" fácil";
    `JavaScript é "super" fácil"`;
    "JavaScript é "super" fácil"; // Inválido
    // Não necessariamente precisamos atribuir valores a uma variável


    TEMPLATE STRING

    EX:
    var gols = 1000;
    var frase1 = 'Romario fez ' + gols + ' gols';
    var frase2 = `Romario fez ${gols} gols`; // Utilizando Template String
    // Você deve passar expressões / variaveis dentro de ${}

    EXERCÍCIO
    Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.

    // Declare uma variável contendo uma string
    var nome = 'Fredson';

    // Declare uma variável contendo um número dentro de uma string
    var jogos = '1';
    var nomes = 'nome1';

    // Declare uma variável com a sua idade
    var idade = 31;

    // Declare duas variáveis, uma com seu nome
    var nome = 'Fredson';

    // e outra com seu sobrenome e some as mesmas
    var sobrenome = 'Sousa';
    var nomeCompleto = nome + ' ' + sobrenome;
    console.log(nomeCompleto);

    // Coloque a seguinte frase em uma variável: It's time
    

    // Verifique o tipo da variável que contém o seu nome
    var nome = 'Fredson';
    console.log(typeof nome);


































*/