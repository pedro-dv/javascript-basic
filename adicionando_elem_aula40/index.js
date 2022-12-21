// Criar elemento filho com class
var elemento = document.createElement('div')
elemento.classList = 'div-criada'

// Adicionado dentro do elemento Pai
var container = document.querySelector('#container')

container.appendChild(elemento)
console.log(container)

// inserBefore - insere antes
var ele = document.createElement('div')
ele.classList = 'div-before'

var ele2 = document.querySelector('#container.div-criada')
container.insertBefore(ele, ele2)
