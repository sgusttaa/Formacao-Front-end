// 1 - metodos

const animal = {
    nome: 'bob',
    latir: function() {
        console.log('au, au')
    },
}

console.log(animal.nome)

animal.latir()

// 2 - aprofundando em metodos

const pessoa = {
    nome: 'Gustavo',

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
};

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome('leandro')
console.log(pessoa.getNome())

// 3 - prototype

const text = 'asd'
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(Object.getPrototypeOf(arr))

