// toLowerCase = string menusculas
//toUpperCase = string maiusculas

var frase = 'Esta é a frase que iremos manipular'
console.log(frase.toLowerCase())

var fraseCaixaAlta = frase.toUpperCase()
console.log(fraseCaixaAlta)

console.log(fraseCaixaAlta.toLowerCase())

//trim = remove espaços de uma string

var nome = '  jpedro   '
var  nomeTrim = nome.trim()
console.log(nomeTrim)

//splint = virgulas nas strings

console.log(frase.split(' '))
var tags = 'php, java, pyton,'
console.log(tags.split(', '))

//lasindexOf = encontra a ultima string

var fraseDois = 'Eu quero a ultima palavra teste'
console.log(fraseDois.indexOf("teste"))
console.log(fraseDois.lastIndexOf('teste'))