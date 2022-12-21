let pessoa = {
    nome: 'pedro',
    idade: 28,
    falar: function (){
        console.log('hello world!')
    },
    soma: function(a,b) {
        return a + b
    },
}
pessoa.falar()
console.log(pessoa.nome)

var resultado = pessoa.soma(88,76)
console.log(resultado)

