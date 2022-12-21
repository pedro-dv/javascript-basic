// Evento de mouseover
var titulo = document.querySelector('#titulo')
titulo.addEventListener('mouseover', function(){
      this.style.backgroundColor = 'yellow'
})

//Evento mouseout
titulo.addEventListener('mouseout',function(){
    titulo.style.backgroundColor = 'red'
})