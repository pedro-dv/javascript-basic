var lista = ['limão','uva','pera','maçã','abacaxi']

var listaul = document.createElement('ul')
var body = document.getElementsByTagName('body')

body[0].appendChild(listaul)

var listaNObody = document.getElementsByTagName('ul')

console.log(listaNObody[0])

for (var i = 0; i < lista.length; i++) {
    
    var lifor = document.createElement('li')
    
    var textoli = document.createTextNode(lista[i])
    
    lifor.appendChild(textoli)
    
    listaNObody[0].appendChild(lifor)
}