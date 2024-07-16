// 1 - arrays
//  arrays são utilizados mais quando contem um tipo de dado unico

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

// 5 - objetos
//  objetos são usados mais para descrever um item

const person = {
    name: 'gustavo',
    age: '31',
    job: 'programador'
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job.length)

// 6 - criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}
console.log(car);

car.doors = 4;
console.log(car)

delete car.km
console.log(car)

// 7 - mais sobre objetos

const obj = {
    a: 'teste',
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)// atribui as propriedads do obj ao obj2

console.log(obj2)

// 8 - conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - mutação

const a = {
    name: 'gustavo'
}

const b = a;

console.log(a)
console.log(b)

console.log(a === b)

a.age = 19;

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - loop em array

const users = ['gustavo','luis', 'pedro', 'rogerio']

for(let i = 0; i < users.length; i++ ){
    console.log(`listando os usuarios: ${users[i]}`)
}

// 11 - push e pop

const array = ['a', 'b', 'c']

array.push('d'); // adiciona novos elementos no final da array
console.log(array)

array.pop();//remove o ultimo item da lista
console.log(array)

const removeItem = array.pop()//cria uma variavel e guarda o valor removido 
console.log(removeItem)//mostra o item removido

console.log(array)

array.push('f', 'g', 'h')//adiciona 3 elementos de uma vez
console.log(array)

// 12 - shift e unshift

const letters = ['a', 'b', 'c']
console.log(letters)

const letter = letters.shift()//retira o primeiro item da array e guarda numa variavel
console.log(letter)

console.log(letters)

letters.unshift('p', 'q', 'r')//adiciona novos elementos no comeco da array
letters.unshift('z')

console.log(letters)