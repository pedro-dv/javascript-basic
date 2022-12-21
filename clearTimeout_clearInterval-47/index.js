//clearTimeout
var x = 0

var mytimer = setTimeout(function(){
    console.log('the x is 0')
},2000)

x = 5

if (x > 0) {
    clearTimeout(mytimer)
    console.log('the x passed on 0')
}

//clearsetInterval

var myInterval = setInterval(function(){
      console.log('testando meu Interval de 1s')
},1000)

setTimeout (function(){
    console.log('não precisa mais repetir ')
    clearInterval(myInterval)
},5000)