// criando paragrafo
var newparagrafo = document.createElement('p')

var texto = document.createTextNode('novo texto criado no TextNode')

newparagrafo.appendChild(texto)
console.log(newparagrafo)

// Adicionando no body
var body = document.querySelector('body')
body.appendChild(newparagrafo)

// Inserir em um container (div)
var container = document.querySelector('#container')
var spanvar = document.createElement('apan')

spanvar.appendChild(document.createTextNode('texto do span'))
console.log(spanvar)

container.appendChild(spanvar)

