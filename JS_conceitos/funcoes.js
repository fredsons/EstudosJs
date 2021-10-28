/*
    // FUNÇÕES

    * Bloco de código que pode ser executado e reutilizado. 
    Valores podem ser passados por uma função e a mesma retorna outro valor.
    
    function areaQuadrado(lado) {  >>> declara a função 
        return lado * lado;
    }

    areaQuadrado(4) // 16    >>>>>>> ativa a função 
    areaQuadrado(5) // 25
    areaQuadrado(2) // 4

    * Chamada de function declaration

    function pi() {
        return 3.14;
    }

    var total = 5 * pi(); // 15.7

    * Parênteses () executam uma função

    // PARÂMETROS E ARGUMENTOS

    * Ao criar uma função, você pode definir parâmetros
    * Ao executar uma função, você pode passar argumentos 
    
    // Peso e altura são parâmetros
    function imc(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc;
    }

    imc(80, 1.80) // 80 e 1.80 são os argumentos
    imc(60, 1.70) // 60 e 1.70 são os argumentos

    * Separar por virgula cada parâmetro.
    Você pode definir mais de um parâmetro ou nenhum também

    // PARÊNTESES EXECUTA A FUNÇÃO

    function corFavorita (cor) {
        if(cor === 'azul') {
            return 'Você gosta do céu';    
        } else if(cor === 'Verde') {
            return 'Você gosta de mato';
        } else {
            return 'Você não gosta de nada';
        }
    }
    corFavorita(); // Retorna 'Você não gosta de nada'

    * Se apenas definirmos a funçã com o function e não executarmos a mesma,
    nada que estiver dentro dela ira acontecer.

    // ARGUMENTOS PODEM SER FUNÇÕES

    * Chamadas de Callback, geralmente são funções que ocorrem após um evento
    addEventListener('click', function() {
        console.log('Clicou');
    });

    * A função possui dois argumentos
    * Primeiro é ujma string 'click'
    * Segundo é uma função anônima 
    * Funções anônimas são aquelas em que o nome da função não é definido,
    escritas como function() {} ou () => {}
    
    // PODE OU NÃO RETORNAR UM VALOR

    function imc(peso, altura) {
        const imc = peso / (altura ** 2);
        console.log(imc);
    }

    imc(80, 1.80); // retorna o imc
    console.log(imc(80, 1.80)); // retorna o imc e undefined

    // VALORES RETORNADOS

    * Uma função pode retornar qualquer tipo de dado e ate outras funções.

    function terceiraIdade(idade) {
        if(typeof idade !== 'number') {
            return 'Informe a sua idade!';
        } else if (idade >= 60) {
            return true;
        } else{
            return false;
        }
    }
    
    * CUIDADO! retornar diferentes tipos de dados na mesma função não é uma boa ideia.

    // ESCOPO

    * Varáveis e funções definidas dentro de um bloco {}, não são visiveis fora dele.

    function precisoVisitar(paisesVisitados) {
        var totalPaises = 193;
        return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
    }
    console.log(totalPaises); // erro,  totalPaises não definido

    // ESCOPO LÉXICO

    * Funções conseguem acessar variáveis que foram criadas no contexto pai
    var profissao = 'Designer';

    function dados(){
        var nome = 'Fredson';
        var idade = 31;
        function outrosDados() {
            var endereco = 'São Paulo';
            var idade = 29;
            return `${nome}, ${idade}, ${endereco}, ${profissao}`;
        } 
        return outrosDados();
    }

    dados(); // Retorna 'Fredson, 29, São Paulo, Designer'
    outrosDados(); // Retorna um Erro

    // HOISTING

    * Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

    imc(80, 1.80); // imc aparece no console

    function imc(peso, altura) {
        const imc = peso / (altura ** 2);
        console.log(imc);
    }


    // EXERCÍCIO

    // Crie uma função para verificar se um valor é Truthy

    function isTruthy(dado) {
        return !!dado;
    }

    // Crie uma função matemática que retorne o perímetro de um quadrado
    // lembrando: perímetro é a soma dos quatro lados do quadrado

    function perimetroQuadrado(lado) {
        return lado * 4;
    }
    perimetroQuadrado();

    // Crie uma função que retorne o seu nome completo
    // ela deve possuir os parâmetros: nome e sobrenome

    function nomeCompleto(nome, sobrenome) {
        return `${nome} ${sobrenome}`
    }
    nomeCompleto();


    // Crie uma função que verifica se um número é par

    function isEven(numero) {
        var modulo = numero % 2;
        if(modulo === 0) {
            return true;
        } else {
            return false;
        }
    }

    isEven();


    // Crie uma função que retorne o tipo de
    // dado do argumento passado nela (typeof)

    function tipoDeDado(dado) {
        return typeof dado;
    }
    tipoDeDado();

    // addEventListener é uma função nativa do JavaScript
    // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
    // utilize essa função para mostrar no console o seu nome completo
    // quando o evento 'scroll' ocorrer.

    addEventListener('scroll', function() {
        console.log('Fredson')
    });



    // Corrija o erro abaixo
    function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }
    function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
    }
    precisoVisitar(20);
    jaVisitei(20);


    Correção

    var totalPaises = 193;
    function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }
    function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
    }
    precisoVisitar(20);
    jaVisitei(20);































*/