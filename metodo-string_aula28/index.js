// length = numeros de comprimento

var nome = 'pedro'
console.log(nome.length)

// indexOf = encontrar a posição da string

console.log(nome[3])

var  frase = ' hello World, Pedro ! '
console.log(frase.indexOf('World'))

// slice = remove parte das frases desejadas

var World = frase.slice(7,11)
console.log(World)

//replace = trocar frase

var novafrase = frase.replace('World','Mundo')
console.log(novafrase)
