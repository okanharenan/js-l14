let frase = prompt("Digite uma frase: ")
let fraseInvertida = ""

for (let i = frase.length - 1; i >= 0; i--){
    fraseInvertida += frase[i]
}

console.log(fraseInvertida)