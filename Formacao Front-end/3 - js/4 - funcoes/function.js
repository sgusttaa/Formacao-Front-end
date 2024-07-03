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

