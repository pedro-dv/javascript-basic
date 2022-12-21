//selecionar elemento
var title = document.querySelector('#titulo')
console.log(title)

//innerHTML
title.innerHTML = 'Mudei o titulo h1'

//textContent = Mais utilizado, recomendado e performático
var titulo2 = document.querySelector('.titulo2')

titulo2.textContent = 'mudei o segundo titulo h2'