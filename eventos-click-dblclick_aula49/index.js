var btn = document.querySelector('#btn')
console.log(btn)

btn.addEventListener( 'click',function(){
    console.log('clicou')
    console.log(this)
    btn.style.color = 'red'
})

//click afetando outros elementos

var titulo = document.querySelector('#titulo')
titulo.addEventListener('click', function(){
    var titulo2 = document.querySelector('.titulo2')
    console.log('clicou')
    console.log(this)
    titulo2.style.color = 'red'
    
})

//double click

var titulo2 = document.querySelector('.titulo2')
titulo2.addEventListener('dblclick', function(){
     console.log('click Duplo')
    
})
