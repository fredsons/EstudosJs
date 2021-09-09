
/* Inicio dos estudos em JS*/ 


/* 
        VARIÁVEIS

    * Responsáveis por guardar dados na memória
    * Inicia com a palavra 'reservada' VAR, LET ou CONST
    

    EX: 
    var nome = 'Fredson';
    let idade = 31;
    const possuiFaculdade = true;


    * Evitam repetições (DRY Don't repeat yourself)

    EX:
    var preco = 20;
    var totalComprado = 5;
    var precoTotal = preco * totalComprado;


    * SINTAXE
    * Palavra chave 'var' seguida do nome, sinal de igual e o valor.
    
    EX:
    var nome ='Fredson';
    var idade = 31;
    var possuiFaculdade = true;

    * VIRGULA
    * Utilizei a vírgula para criar mais de uma variavel, sem repetir a palavra chave 'var'
    
    EX:
    var nome = 'Fredson',
        idade = 31,
        possuiFaculdade = true;


    
    * SEM VALOR
    * Pode declarar ela e não atribuir valor inicialmente.
    
    EX: var precoAplicativo; 
        console.log(precoAplicativo)
        // retorna undefined


    * NOME
    * Os nomes ppodem iniciar com $, _, ou letras.
    * Podem conter números mas iniciar com eles
    * Case sensitive, nome é diferente de Nome
    * Não utilizar palavras reservadas 
    
    EX: 
    abstract	arguments	await*	boolean
    break	byte	case	catch
    char	class*	const	continue
    debugger	default	delete	do
    double	else	enum*	eval
    export*	extends*	false	final
    finally	float	for	function
    goto	if	implements	import*
    in	instanceof	int	interface
    let*	long	native	new
    null	package	private	protected
    public	return	short	static
    super*	switch	synchronized	this
    throw	throws	transient	true
    try	typeof	var	void
    volatile	while	with	yield

    * Camel case, é comum nomearmos assim: abrirModal

    * NOME
    EX:
    // INVALIDO
    var §nome;
    var function;
    var 1possuiFaculdade;

    //VALIDO
    var $selecionar;
    var _nome;
    var possuiFaculdadeNoExterior;


    * DECLARAR
    * Erro ao tentar utilizar uma variável que nao foi declarada
    
    EX:
    console.log(nome);
    // retorna nome is not defined


    * HOISTING
    * São movidas para cima do codigo, porém o valor atribuído não é movido.
    
    EX:
    console.log(nome);
    var nome = 'Fredson';
    // retorna undefined

    var profissao = 'Dev'
    console.log(profissao);
    //retorna Dev


    * MUDAR O VALOR ATRIBUÍDO
    * É possivel mudar os valores atribuidos a variáveis declaradas com 'var' e 'let'.
    * Porém não é possivel modificar valores das declaradas com 'const'
    
    EX:
    var idade = 31;
    idade = 30;

    let preco = 50;
    preco = 49;

    const possuiFaculdade = true;
    possuiFaculdade = false;
    // Retorna um erro


   * EXERCÍCIO
   * Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.

    // Declarar uma variável com o seu nome

    var nome  = 'Fredson';

    // Declarar uma variável com a sua idade

    var idade = 31;

    // Declarar uma variável com a sua comida favorita e não atribuir valor

    var comidaPreferida;

    // Atribuir valor a sua comida favorita

    comidaPreferida = 'churrasco';

    // Declarar 5 variáveis diferentes sem valores

    var nome,
    sobrenome,
    idade,
    profissao,
    time;



































*/
