var nome = 'pedro'
var idade = 28
if (nome == 'henrique'|| idade > 27){
    console.log('algo esta false!')
} else {
    console.log('esta tudo true!')
}
if (nome == 'pedro' && (idade > 27 || 2 < 1)){
    console.log('os dois lados tem true!')
}
/* '&&' Pra executar tem que ter (true) nos dois lados 
ja o '||' (true e false) ele executa!  */