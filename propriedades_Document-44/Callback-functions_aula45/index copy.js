var dizernome = callback => {
    var nome = 'pedro'
    callback(nome)
}
dizernome(nome => {
     console.log(nome)
})