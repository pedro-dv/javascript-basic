console.log(this)



let pessoa = {
    nome: 'pedro',
    idade: 28,
    falar: function(){
        console.log('hello Pedro henrique!')
    },
    dizernome: function(){
        console.log('O nome é : ' + this.nome)
    },
    aniversario: function(){
        this.idade += 1
    }
}

pessoa.dizernome()

console.log(pessoa.idade)
pessoa.aniversario()
