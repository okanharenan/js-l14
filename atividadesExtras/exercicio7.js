let frase = "Hello World"

function inverterFrase(str){
    let fraseInvertidade = ''
    for (let i = 0; i < str.length; i++){
        fraseInvertidade = str[i] + fraseInvertidade
    }

    return fraseInvertidade
}

console.log(inverterFrase(frase))


let arrayNumbers = [10,20,30,40,50]

function MaiorNumero(array){
    let maior = array[0]
    for (let i = 0; i < array.length; i++){
        if( array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

console.log("O maior número do array é: " + MaiorNumero(arrayNumbers))


function factorial(num){
    let resultado = 1
    for (let i = 1; i <= num; i++){
        resultado *= i
    }
    return resultado
}

console.log("O fatorial de 5 é: " + factorial(5))

function countVowels(str){
    let count = 0
    let vowels = ['a','e','i','o','u']
    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase())){
            count ++
        }
    }
    return count
}

console.log("A frase '" + frase + "' tem " + countVowels(frase) + " vogais.")

let frase2 = "Arara"
function isPalindrome(str){
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reversedStr = cleanedStr.split('').reverse().join('')
    return cleanedStr === reversedStr
}


console.log("A frase '" + frase2 + "' é um palíndromo? " + isPalindrome(frase2))

function fibonacci(n){
    let sequence = []
    for (let i = 0; i < n; i++){
        if (i === 0){
            sequence.push(0)
        }else if (i === 1){
            sequence.push(1)
        }else{
            sequence.push(sequence[i - 1] + sequence[i - 2])
        }
    }
    return sequence
}

console.log("Os primeiros 10 números da sequência de Fibonacci são: " + fibonacci(10).join(' -> '))

let arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5]

function removeduplicates(array){
    let uniquearray = []
    for (let i = 0; i < array.length; i++){
        if (!uniquearray.includes(array[i])){
            uniquearray.push(array[i])
        }
    }
    return uniquearray
}

console.log("Array original: " + arrayWithDuplicates)
console.log("Array sem duplicatas: " + removeduplicates(arrayWithDuplicates))

let countOcorrencia = (array) => {
    let count = {}
    for (let i = 0; i < array.length; i++){
        if (count[array[i]]){
            count[array[i]] ++
        }else{
            count[array[i]] = 1
        }
    }
    return count
}


console.log("Contagem de ocorrências: " + JSON.stringify(countOcorrencia(arrayWithDuplicates)))