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

// 13 - indexOf e lastIndexOf

const myElements = ['morango', 'maça', 'abacate', 'pera', 'banana', 'maça']

console.log(myElements.indexOf('abacate')); //indica a posicao do elemento pesquisado
console.log(myElements.lastIndexOf('maça')); //indica a posicao do ultimo elemento pesquisado

console.log(myElements.indexOf('mamao'))
console.log(myElements.lastIndexOf('mamao'))

// 14 - slice  define um intervalo para espeficifar o fim e o inicio de uma sequencia

const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testeSlice.slice(2, 4)
console.log(subArray)
console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3)

const subArray4 = testeSlice.slice(2) // a partir do elemento 2
console.log(subArray4)

// 15 - forEach (para cada)

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`o número é ${numero}`)
})

const posts = [
    {title: 'Primeiro post', category:'PHP'},
    {title: 'Segundo post', category:'JavaScript'},
    {title: 'Terceiro post', category:'Python'}
]

posts.forEach((post) => {
    console.log(`Exibindo: ${post.title}, da categoria ${post.category}`)
})

// 16 - includes retorna um valor booleano(true ou false)

const brands = ['BMW', 'VW', 'Fiat']

console.log(brands.includes('Fiat'))
console.log(brands.includes('Fat'))

if(brands.includes('BMW')){
    console.log('Há carros da marca BMW')
}

// 17 - reverse inverte a lista

const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse();
console.log(reverseTest)

//strings
// 18 - trim  nao modifica a string original

const trimTest = '    testando \n  '

console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.length)
console.log(trimTest.trim().length)

// 19 - padStart

const padStart = '100'

const newNumber = padStart.padStart(4, '0')

console.log(padStart)
console.log(newNumber)

const padEnd = newNumber.padEnd(10, '0')

console.log(padEnd)

// 20 - split

const frase = 'o rato roeu a roupa do rei de roma'

const arrayDaFrase = frase.split(' ')

console.log(arrayDaFrase)

// 21 - join

const fraseDeNovo = arrayDaFrase.join(' ')
console.log(fraseDeNovo)

const itensParaComprar = ['mouse', 'teclado', 'monitor']
const fraseDeCompra = `precisamos comprar: ${itensParaComprar.join(', ')}.`

console.log(fraseDeCompra )

// 22 - repeat

const palavra = 'testando '

console.log(palavra.repeat(4))

//arrays
// 23 - rest operador

const somaInfinita = (...args) => {
    let total = 0;

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1,2,3,4,5,6,7,8,9,0))
console.log(somaInfinita(100, 800, 10))

// 24 - for of

const somaInfinita2 = (...args) => {
    let total = 0;

    for(num of args) {
        total += num
    }
    return total
}

console.log(somaInfinita2(1, 2, 3, 7))

//object
// 25 - distructuring em objetos

const userDetails = {
    firstName: 'gustavo',
    lastName: 'prado',
    job: 'programador'
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renomear variaveis
const {firstName: primeiroNome} = userDetails

console.log(primeiroNome)

// array
// 26 - distructuring em array

const myList = ['aviao', 'submarino', 'carro']

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON

const myJson = '{"name": "Gustavo", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'

// 28 - conversao de JSON para objeto (stringify, parse)

const myObject = JSON.parse(myJson)

console.log(myObject)
console.log(myObject.name)

//json invalido
const badJson = '{"name": gustavo, "age": 31 }'

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)
