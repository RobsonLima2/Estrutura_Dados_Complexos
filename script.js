// Crie um array que receba 5 itens e exiba no console.
let carros = ['Fusca', 'Opala', 'Brasilia', 'Passat', 'Chevette']
console.log(carros)

// Utilize um método para adicionar um nome ao inicio do array.
carros.unshift('Uno')
console.log(carros)


// Utilize um método para remover o último nome do array.
carros.pop()
console.log(carros)

// Utilize um método para adicionar dois nomes ao fim do array.
carros.push('Escort', 'Maverick')
console.log(carros)

// // Utilize um método para remover o primeiro nome do array.
carros.shift()
console.log(carros)

// // Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return(a-b)
})
console.log(numbers)