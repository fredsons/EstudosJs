/*

    * OBJETOS

    * PROTOTYPE

    A prorpiedade prototype é um objeto adicionado a uma função quando a mesma é criada.

    function Pessoa (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    const andre = newPessoa( 'André', 28);

    console.log(Pessoa.prototype); // retorna o objeto
    console.log(andre.prototype); // undefined

    
    * FUNÇÃO PROTOTYPE

    É possivel adicionar novas propriedades e metodos ao objeto prototype.

    Pessoa.prototype.andar = function() {
        return this.nome = ' andou';
    }

    Pessoa.prototype.nadar = function() {
        return this.nome = ' nadou';
    }

    console.log(Pessoa.prototype); // retorna o objeto


    *  ACESSO AO PROTÓTIPO

    O objeto criado ultilizando o construtor, possui acesso aos metodos e propriedades do protótipo deste construtor. 
    Lembrando, prototype é uma propriedade de funções apenas

    const ndre = new Pessoa('André', 28);

    andre.nome;
    andre.idade;
    andre.andar();
    andre.nadar();


    * PROTO 

    O novo objeto acessa métodos e propriedades do protótipo atravez da propriedade  __proto__ 
    É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

    Acessam o mesmo método mas __proto__ não tera acesso ao this.nome
    andre.andar();
    andre.__proto__.andar();

    * HERANÇA DE PROTÓTIPO

    O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsavel por criar este objeto.
    O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdadas do protótipo de Object.


    Object.prototype;
    andre.toString();
    andre.isPrototypeOf();
    andre.valueOf();


    * CONSTRUTORES NATIVOS

    Objetos, funções, numeros, strings e outros tipos de dados são criados ultilizando construtores.
    Esses construtores possuem um protótipo com propriedades e metodos, que poderão ser acessadas pelo tipo de dado.

    const pais = 'Brasil';
    const cidade = new String('Rio');

    pais.charAt(0); B
    cidade.charAt(0); R

    String.prototype;


    * É POSSIVEL ACESSAR A FUNÇÃO DO PROTÓTIPO

    É comum, principalmente em codigos mais antigos, o uso direto de funções do protótipo do construtor Array.

    const lista = document.querySelectorAll('li');

    Transforma em uma array
    const listaArray - Array.prototype.slice.call(lista);

    Existe o método Array.from()


    * MÉTODO DO OBJETO VS PROTÓTIPO

    Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

    Array.prototype.slice.call(lista);
    Array.from(lista);

    Retorna uma lista com os metodos / propriedades
    Object.getOwnPropertyNames(Array);
    Object.getOwnPropertyNames(Array.prototype);

    dado.constructor.name, retorna o nome do construtor


    * APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS

    [1,2,3].slice();  existe
    [1,2,3].from();   não existe

    * ENTENDA O QUE ESTA SENDO RETORNADO

    Os metodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse . 

    const Carro = {
        marca: 'Ford',
        preco:2000,
        acelerar() {
            return true;
        }
    }

    Carro  oject
    Carro.marca   String
    Carro.preco   Number
    Carro.acelerar  Function
    Carro.acelerar()  Boolean
    Carro.marca.charAt  function
    Carro.marca.charAt(0)  String

    

    * EXERCICIOS

    / Crie uma função construtora de Pessoas. Deve conter nome, sobrenome e idade

    function Pessoa (nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    Pessoa.prototype.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }


    / Crie um método no protótipo que retorne  o nome completo da pessoa

    const andre = new Pessoa('André', 'Rafael', 28)


    

    / Liste os métodos acessados por dados criados com NodeList,  HTMLCollection, Document

    Object.getOwnPropertyNames(Nodelist.prototype)
    Object.getOwnPropertyNames(HTMLCollection.prototype)
    Object.getOwnPropertyNames(Document.prototype)



    / Liste os construtores dos dados abaixo

    const li = document.querySelector('li');

    li;  HTMLLIElement
    li.click; Function
    li.innerText; String
    li.value; Number
    li.hidden; Boolean
    li.offsetLeft; Number
    li.click(); Undefined



    / Qual o construtor do dado abaixo:
    li.hidden.constructor.name;  String



*/