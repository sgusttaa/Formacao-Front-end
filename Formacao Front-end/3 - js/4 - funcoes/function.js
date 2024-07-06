// 1- criando uma funcao

function funcao(){
    console.log('funcao normal');
}
funcao();

const funcaoVariavel = function() {
    console.log('funcao usando variavel')
}
funcaoVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}
funcaoComParametro("imprimindo alguma coisa")

funcaoComParametro("outra funcao")

// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}
const resultado = soma(a, b)

console.log(resultado);
console.log(soma(c, d))

// 3 - escopo da funcao

let y = 10

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da funcao é: ${y}`)
}

console.log(`Y fora da funcao é: ${y}`);
testandoEscopo();

// 4 - escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;
    if(true){
        let m = 30;

        if(true){
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m)

// 5 - arrow function

const testeArrow = () => {
    console.log('Esta é uma arrow function!');
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 == 0){
        console.log('numero par')
        return
    }else{
        console.log('numero impar')
        return
    }
}

parOuImpar(5);
parOuImpar(6)

// 6 - mais de arrow 

const raizQuadrada1 = (n) => {
    return n * n;
}

const raizQuadrada2 = (n) => n * n;

console.log(raizQuadrada1(4));
console.log(raizQuadrada2(4));

const helloWorld = () => console.log('hello!');

helloWorld();

// 7 - parametro opcional

const multiplicacao = function (n, m) {
    if (m === undefined) { // se m nao for definido
        return n * 2;
    }else{
        return m * n;
    }
};

console.log(multiplicacao(4))
console.log(multiplicacao(4, 4))

const greeting = (nome) => {
    if (!nome){ // caso nao seja fornecido
        console.log('Olá!');
        return;
    }

    console.log(`Olá ${nome}`);
};

greeting('');
greeting('gustavo');

// 8 - valor default

const customGreeting = (name, greet = 'Olá') =>{
    return `${greet}, ${name}!`;
}

console.log(customGreeting('gustavo'))// caso nao seja usado um 2 parametro entra o greet no lugar

console.log(customGreeting('gustavo', 'Olá, bom dia'))

const repeatText = (text, repeat = 2) =>{ 
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText('testando');

repeatText('agora repete 5 vezes', 5)

// 9 - closure  - conjunto de funcoes

function someFunction() {
    let txt = 'Alguma coisa'

    function display() {
        console.log(txt)
    }

    display();
}

someFunction();

// 10 - mais sobre closures

const multiplicacaoClosure = (n) => {
    return (m) =>{
        return n * m;
    }
}

const c1 = multiplicacaoClosure(5);
const c2 = multiplicacaoClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// 11 - recursao  - permite a funcao se autoinvocar

const untilTen = (n, m) =>{
    if(n < 10) {
        console.log("A função parou de executar!")
    }else{
        const x = n - m;

        console.log(x);

        untilTen(x, m)
    }
};

untilTen(100, 7)

// infinite recursion

// function run(){
//     console.log('executando...');
//     run();
// }
// run()


function factorial(x) {
    if(x === 0){
        return 1
    }else {
        return x * factorial(x - 1)
    }
}

const num = 6;
const result = factorial(num);
console.log(`O fatorial do numero ${num} é: ${result}`) 