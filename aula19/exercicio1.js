
//Adicione um botão ao exemplo anterior onde ao clicar nele, seja adicionado ao carrinho
//importante! o envento precisa ser adicionado no arquivo js, não no atributo js 
//array de produtos
let cardapio = {
    burgueres: [
        {
            nome: "Clássico Angus Burger",
            preco: 22.50,
            descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
            img: "imagens/burger01.png"
        },
        {
            nome: "Gourmet Burger",
            preco: 35.00,
            descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e bacon. Uma escolha irresistível!",
            img: "imagens/burger02.png"
        },
        {
            nome: "Defumado BBQ Burger",
            preco: 29.00,
            descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
            img: "imagens/burger03.png"
        }
    ],

    acompanhamentos: [
        {
            nome: "Fritas",
            preco: 15.00,
            descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
            img: "imagens/acomp01.png"
        }
    ],

    bebidas: [
        {
            nome: "Coca-Cola",
            preco: 5.00,
            descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagens/bebida01.png"
        },
        {
            nome: "Sprite",
            preco: 5.00,
            descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
            img: "imagens/bebida02.png"
        }
    ]
};

let carBurguer = document.querySelector("#sessaoBurguer")
let carAcomp = document.querySelector("#sessaoAcompanhamentos")
let carBebida = document.querySelector("#sessaoBebidas")
let carrinho = []


//modal de decisão
let modalDecisao1 = document.getElementById("modalDecisao")
let modalDecisao = new bootstrap.Modal(modalDecisao1)

let btnCarrinho = document.getElementById("btnIrCarrinho")
let btnContinuar = document.getElementById("btnContinuarComprando")

//offcanvas carrinho 
let offCanvasElementos = document.getElementById("offcanvasScrolling") 
let offcanvasCarrinho = new bootstrap.Offcanvas(offCanvasElementos)

let btnAbrirCarrinho = document.getElementById("modalProdutoAdicionado")

 // pega o elemento do dom do botão limpar carrinho
let limparCarrinhoBtn = document.getElementById("limparCarrinho")

    


limparCarrinhoBtn.addEventListener("click", limparCarrinho)


btnAbrirCarrinho.addEventListener("click", () => {
    if(carrinho.length > 0){
        offcanvasCarrinho.show()
    }else{
        alert("O carrinho está vazio! Adicione produtos para visualizar o carrinho.")
    }
   
})

btnCarrinho.addEventListener("click", () => {
    modalDecisao.hide()
    if(carrinho.length > 0){
        offcanvasCarrinho.show()
    }else{
        alert("O carrinho está vazio! Adicione produtos para visualizar o carrinho.")
    }
})
btnContinuar.addEventListener("click", () =>{
    if(carrinho.length > 0){
        modalDecisao.hide()
    }else{
        alert("O carrinho está vazio! Adicione produtos para continuar comprando.")
    }
    
})


// Função para criar produtos
function criarProduto(produto, container) {
    let boxProduto = document.createElement("div")
    boxProduto.classList.add("boxProduto", "py-3")

    let btn = document.createElement("button")
    btn.textContent = "Pedir"

    // evento no JS (como pedido)
    btn.addEventListener("click", () => {
        adicionarProdutoAoCarrinho(produto)
    })

    boxProduto.innerHTML = `
        <div class="boxImg">  
            <img class="imgProduto" src="${produto.img}" alt="${produto.nome}">  
        </div>
        <div class="boxTexto">
            <h3 class="nomePreco">${produto.nome} - R$ ${produto.preco.toFixed(2)}</h3>
            <p class="descricao">${produto.descricao}</p>
        </div>
    `

    // adiciona botão depois do innerHTML
    boxProduto.querySelector(".boxTexto").appendChild(btn)
    container.appendChild(boxProduto)
}


//função para adicionar produtos ao carrinho
function adicionarProdutoAoCarrinho(produto){
    let itemExiste = carrinho.find(item => item.nome === produto.nome)
    if (itemExiste){
        itemExiste.quantidade ++
    }else{
        carrinho.push({...produto, quantidade: 1})

    }
    mostrarDetalhesProdutoAdicionado(produto)
}

//função para mostrar detalhes do produto adicionado ao carrinho
function mostrarDetalhesProdutoAdicionado(){

    let lista = ""
    let totalCarrinho = 0

    carrinho.forEach(item => {
        let subtotal = item.preco * item.quantidade
        totalCarrinho += subtotal

lista += `
    <div class="linha-carrinho">

        <span>${item.nome}</span>

        <span>R$ ${item.preco.toFixed(2)}</span>

        <div class="controle-quantidade">

            <button class="btn btn-danger diminuir" data-nome="${item.nome}">
                -
            </button>

            <div class="quantidade-box">
                ${item.quantidade}
            </div>

            <button class="btn btn-danger aumentar" data-nome="${item.nome}">
                +
            </button>

        </div>

        <button class="btn btn-danger remover" data-nome="${item.nome}">
            X
        </button>

    </div>
    `

        })

    document.getElementById('modalProdutoNome').innerHTML = lista

    document.getElementById('modalTotalCarrinho').textContent =
    `R$ ${totalCarrinho.toFixed(2)}`

    adicionarEventosCarrinho()

       

    if(carrinho.length > 0){
        modalDecisao.show()
    }else{
        alert("O carrinho está vazio! Adicione produtos para visualizar o carrinho.")
    }
    
    
}

function mostrarCarrinhoVazio(){
    document.getElementById("modalProdutoNome").innerHTML =
    "<p>Seu carrinho está vazio.</p>"

    document.getElementById("modalTotalCarrinho").textContent =
    "R$ 0,00"
}

function calcularTotalCarrinho(){
    let total = 0

    carrinho.forEach(item => {
        total += item.preco * item.quantidade
    })

    return total
}

function adicionarEventosCarrinho() {
    document.querySelectorAll(".aumentar").forEach(btn => {
        btn.onclick = () => {
            let nomeProduto = btn.dataset.nome;
            acrescentarQuantidade(nomeProduto);
        };
    });

    document.querySelectorAll(".diminuir").forEach(btn => {
        btn.onclick = () => {
            let nomeProduto = btn.dataset.nome;
            diminuirQuantidade(nomeProduto);
        };
    });

    document.querySelectorAll(".remover").forEach(btn => {
        btn.onclick = () => {
            let nomeProduto = btn.dataset.nome;
            removerProduto(nomeProduto);
            
        };
    });

    document.getElementById("finalizarCompra").addEventListener("click", finalizarCompra)



}

function limparCarrinho(){
    carrinho = []

    offcanvasCarrinho.hide()
    modalDecisao.hide()

    mostrarCarrinhoVazio()
}

function finalizarCompra(){
    alert("Compra finalizada! Total: R$ " + calcularTotalCarrinho().toFixed(2))
    limparCarrinho()
}

function acrescentarQuantidade(nomeProduto){
    let item = carrinho.find(item => item.nome === nomeProduto)
    if(item){
        item.quantidade ++
        mostrarDetalhesProdutoAdicionado()
    }
}

function diminuirQuantidade(nomeProduto){
    let item = carrinho.find(item => item.nome === nomeProduto)
    if (item && item.quantidade > 1){
        item.quantidade -- 
    }
    mostrarDetalhesProdutoAdicionado()
}

function removerProduto(nomeProduto){
    carrinho = carrinho.filter(item => item.nome !== nomeProduto)
    mostrarDetalhesProdutoAdicionado()
}


// Burgueres
cardapio.burgueres.forEach(burguer => {
    criarProduto(burguer, carBurguer)
})

// Acompanhamentos
cardapio.acompanhamentos.forEach(acomp => {
    criarProduto(acomp, carAcomp)
})

// Bebidas
cardapio.bebidas.forEach(bebida => {
    criarProduto(bebida, carBebida)
})




//crie uma função adicionarProdutoAoCarrinho que recebe objeto produto como parâmetro e adiciona o produto ao carrinho


// crie uma função que é detalheProdutoAdionado, que será um modal do bootstrap que seja exibido quando o produto for adicionado ao carrinho, mostrando o nome do produto adicionado e o valor total do carrinho (considerando que o carrinho é um array onde os produtos são adicionados)

