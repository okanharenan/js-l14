//faça uma página onde o usuário possa cadastrar um produto. Esse produto deve conter uma imagem ( que terá uma URL ), um nome, uma descrição e um preço.
//Informando todos esses dados ao submeter o formulário o produto será adicionado ao array (no formato de objeto) e será renderizado na tela em um card bootstrap.

//IMPORTANTE: valide se o preço do produto é maior que zero. Caso seja menor que zero, exiba uma mensagem de erro abaixo do campo de preço, informando que o preço deve ser maior que zero.
//Veriique se o produto já existe no array. Caso exista, exiba uma mensagem de erro abaixo do campo de nome, informando que o produto ja foi cadastrado.
//usando o método find() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

let produtos = []

let form = document.getElementById("formProduto")

let listaProdutos = document.getElementById("listaProdutos")

form.addEventListener("submit", (event) => {

event.preventDefault()

let nome = document.getElementById("nome").value
let descricao = document.getElementById("descricao").value
let preco = Number(document.getElementById("preco").value)
let imagem = document.getElementById("imagem").value

let erroNome = document.getElementById("erroNome")
let erroPreco = document.getElementById("erroPreco")

erroNome.textContent = ""
erroPreco.textContent = ""

// valida preço
if(preco <= 0){
    erroPreco.textContent = "O preço deve ser maior que zero."
    return
}

// verifica produto duplicado
let produtoExiste = produtos.find(produto => 
    produto.nome.toLowerCase() === nome.toLowerCase()
)

if(produtoExiste){
    erroNome.textContent = "Esse produto já foi cadastrado."
    return
}

// cria objeto
let novoProduto = {
    nome,
    descricao,
    preco,
    imagem
}

// adiciona no array
produtos.push(novoProduto)

// renderiza produto
renderizarProdutos()

// limpa formulário
form.reset()

})


function renderizarProdutos(){

    listaProdutos.innerHTML = ""

    produtos.forEach(produto => {

        listaProdutos.innerHTML += `
        
            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow-sm">

                    <img 
                        src="${produto.imagem}" 
                        class="card-img-top"
                        style="height: 250px; object-fit: cover;"
                    >

                    <div class="card-body">

                        <h5 class="card-title">
                            ${produto.nome}
                        </h5>

                        <p class="card-text">
                            ${produto.descricao}
                        </p>

                        <h6 class="text-success">
                            R$ ${produto.preco.toFixed(2)}
                        </h6>

                    </div>

                </div>

            </div>

        `
    })

}