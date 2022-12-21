// keydown
document.addEventListener('keydown', function(event){
      
    if(event.key === 'p') {
        console.log('Apertou p')
      }
      
})

// keyup = melhor de usar

document.addEventListener('keyup',function(e){
    if(event.key ==='p') {
        console.log('soltou o p')
    }
})