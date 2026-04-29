let array = [5,3,8,1]
function bubbleSort(arr){
    let arrayOrdenado = []
    for(let i = 0; i < array.length; i++){
        if(array[i] < arrayOrdenado[0] || arrayOrdenado.length === 0){
            arrayOrdenado.unshift(array[i])
        }else{
            arrayOrdenado.push(array[i])
        }
    }


console.log(arrayOrdenado)
}

function fibonacci(n){
    let fib = 0
    let fibAnterior = 1
    let sequencia = []
    for(let i = 0; i < n; i++){
        sequencia.push(fib)
        let temp = fib
        fib = fib + fibAnterior
        fibAnterior = temp
    }
    return sequencia
}

console.log(fibonacci(10))

console.log(bubbleSort(array))