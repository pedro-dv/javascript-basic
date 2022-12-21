var titulo = document.querySelector('#titulo')
titulo.setAttribute('classe','texto da class')
console.log(titulo)

var button = document.createElement('button')
var texto = document.createTextNode('botão')
button.appendChild(texto)
console.log(button)

var div = document.querySelector('#container')
div.appendChild(button)
console.log(div)

var body = document.querySelector('body')
body.appendChild(div)
console.log(body)

var botaoOf = document.querySelector('#container button')
console.log(botaoOf)
botaoOf.setAttribute('disabled','desligado')

//remover Atributos

var lista = document.querySelector('#lista')
lista.removeAttribute('id')
console.log(lista)
