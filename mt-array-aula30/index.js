// length = comprimento da array
var arr = [1,2,3,4,5]
console.log(arr.length)

// push = adiciona elemento no final na array
arr.push(6)
arr.push('string tbm')
console.log(arr)

// pop = remove o ultimo elemento na array
arr.pop()
console.log(arr)

// unshift = adiciona elemento no começo da array
arr.unshift('pedro')
console.log(arr)

// shift = remove elemento do començo da array
arr.shift()
console.log(arr)

//acessar o ultimo elemento da array
console.log(arr[arr.length -1])

// isArray = Descobrir o tipo de array
console.log(Array.isArray(5))
console.log(Array.isArray(arr))