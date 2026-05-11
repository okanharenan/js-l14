// pegando inputs
let entrada = document.getElementById("entrada")
let pratoPrincipal = document.getElementById("pratoPrincipal")
let bebidas = document.getElementById("bebidas")
let sobremesa = document.getElementById("sobremesa")

let taxaServico = document.getElementById("taxaServico")
let subTotal = document.getElementById("subTotal")
let total = document.getElementById("total")


// função de cálculo
function calcularComanda(){

    // Number transforma texto em número
    let valorEntrada = Number(entrada.value) || 0
    let valorPrato = Number(pratoPrincipal.value) || 0
    let valorBebidas = Number(bebidas.value) || 0
    let valorSobremesa = Number(sobremesa.value) || 0

    // soma subtotal
    let soma = valorEntrada + valorPrato + valorBebidas + valorSobremesa

    // taxa de serviço 10%
    let taxa = soma * 0.10

    // total final
    let totalFinal = soma + taxa

    // colocando valores nos inputs
    subTotal.value = soma.toFixed(2)

    taxaServico.value = taxa.toFixed(2)

    total.value = totalFinal.toFixed(2)
}


// eventos automáticos
entrada.addEventListener("input", calcularComanda)

pratoPrincipal.addEventListener("input", calcularComanda)

bebidas.addEventListener("input", calcularComanda)

sobremesa.addEventListener("input", calcularComanda)