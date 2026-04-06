/*Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40% */

let preco = parseFloat(prompt("Digite o preço do produto:"));
let corEtiqueta = prompt("Digite a cor da etiqueta (Verde, Amarelo, Azul, Vermelho):").toLowerCase();
let desconto = 0;

switch (corEtiqueta) {
    case "verde":
        desconto = 0.1;
        break;
    case "amarelo":
        desconto = 0.2;
        break;
    case "azul":
        desconto = 0.3;
        break;
    case "vermelho":
        desconto = 0.4;
        break;
    default:
        alert("Cor de etiqueta inválida!");
}
if (desconto > 0) {
    let valorDesconto = preco * desconto;
    let precoFinal = preco - valorDesconto;
    alert(`O preço final do produto é: R$ ${precoFinal.toFixed(2)}`);
}
