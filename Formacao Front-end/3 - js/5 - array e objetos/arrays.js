// 1 - arrays

const lista = [0, 1, 2, 3, 4, 5];

console.log(lista);
console.log(typeof lista); //object

const itens = ['gustavo', true, 2, 4.12, []];

console.log(itens);

// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d"] 

console.log(arr[0]) // invoca o primeiro elemento da lista


// 3 - propriedades

const numbers = [5, 4, 3];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "gustavo";

console.log(myName.length);

// 4 - métodos

const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers)// concatena duas ou mais strings

console.log(allNumbers);

const text = 'Algum Texto';

console.log(text.toUpperCase());
console.log(typeof text);

console.log(text.indexOf('g'));// encontra a posicao da letra ou oq procura

console.log(text.toLowerCase());
