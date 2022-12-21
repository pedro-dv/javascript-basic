// Criar um elemento h3 com (class e texto)
var el = document.createElement('h3')
el.classList = 'class1'

var texto = document.createTextNode('lorem aula 41')
el.appendChild(texto)
console.log(el)

// Selecionar elemento que eu quero trocar
var titulo = document.querySelector('#titulo')
console.log(titulo)

// Selecionado  o elemento Pai do (el)
var body = document.querySelector('body') // var body = titulo.parentnode
body.replaceChild(el, titulo)
