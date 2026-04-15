/* Exercício 11: Imprimir Padrão de Estrelas
Peça um número N e imprima um triângulo de estrelas com N linhas (ex: N=3 -> * \n ** \n ***). Use laços aninhados. */

// Código do exercício:


let num = parseInt(prompt("Digite um número para imprimir o tirangulo de estrelas: "))
 if(num > 0){
    let linha = ""
    for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++){
            linha += "*"
        }
        linha += "\n"
    }
    console.log(linha)
    alert(linha.replace(/\n/g, "\n"))
}else{
    alert("Digite um número positivo.")

}