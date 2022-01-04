/*
    DOM PARA INICIANTES

    * ID
    getElementById seleciona e retorna elementos do DOM

    / Seleciona pelo ID
    const animaisSection = document.getElementById('animais');
    const contatoSection = document.getElementById('contato');

    / Retorna null caso não exista
    const naoExiste = document.getElementById('teste');



    * CLASSE E TAG

    getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados,
    ela  será automaticamente atualizada.

    / Seleciona pela classe, retorna uma HTMLCollection
    const gridSection = document.getElementsByClassName ('grid-section');
    const contato = document.getElementsByTagName('grid-section contato');

    / Seleciona todas as UL's, retorna uma HTMLCollection
    const ul = document.getElementsByTagName ('ul');

    / Retorna o primeiro  elemento
    console.log(gridSection[0]);

    * SELETOR GERAL ÚNICO
    querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

    const animais = document.querySelector('.animais');
    const contato = document.querySelector('#contato');
    const ultimoItem = document.querySelector('.animais-lista li:last-child');
    const linkCSS = document.querySelector('[href^="https://"]');
    const primeiroUl = document.querySelector('ul');

    / Busca dentro do Ul apenas
    const navItem = primeiroUl.querySelector('li');



    * SELETOR GENERALISTA 
    querySelectorAll retorna todos os elementos compativeis com o seletor CSS em uma NodeList

    const gridSection = document.querySelectorAll('.grid-section');
    const listas = document.querySelectorAll('ul');
    const titulos = document.querySelectorAll('.titulo');
    const fotosAnimais = document.querySelectorAll('.animais-lista img');

    / Retorna o segundo elemento
    console.log(gridSection[1]);

    / Diferente do GetElementByClassName, a lista aqui é estatica.


    * HMTLCOLLECTION VS NODELIST

    A diferença está nos metodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estatica.

    const titulo = document.querySelector('.titulo');
    const gridSectionHTML = document.getElementsByClassName('grid-section');
    const gridSectionNode = document.querySelectorAll('.grid-section');

    titulo.classList.add('grid-section');

    console.log(gridSectionHTML); // 4 itens
    console.log(gridSectionNode); // 3 itens

    * ARRAY-LIKE

    HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

    const gridSection = document.querySelectorAll('.grid-section');

    gridSection.forEach(function(gridItem, index, array) {
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
    });

    / É possivel transformar array-like em uma Array real, utilizando o método
    Array.from(gridSection)

    * EXERCÍCIO 

    * Retorne no console todas as imagens do site

    const img = document.querySelectorAll('img');
    console.log(img);

    * Retorne no console apenas as imagens que começaram com a palavra imagem

    const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
    console.log(imagensAnimais);

    * Selecione todos os links internos (onde o href começa com #)

    const linksInterno = document.querySelectorAll('[href^="#"]');
    console.log(linksInterno);


    * Selecione o primeiro h2 dentro de .animais-descricao

    const h2Animais = document.querySelector('.animais-descricao h2');
    console.log(h2Animais);


    * Selecione o último p do site

    const paragrafos = document.querySelectorAll('p');
    console.log(paragrafos[--paragrafos.length]);






































*/