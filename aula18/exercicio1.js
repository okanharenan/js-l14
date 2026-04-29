
let produtos = [
    { nome: "Banana", preco: 2.00, categoria: "Fruta" },
    { nome: "Abacaxi", preco: 5.00, categoria: "Fruta" },
    { nome: "Laranja", preco: 3.00, categoria: "Fruta" },
    { nome: "Pera", preco: 4.00, categoria: "Fruta" }
];

let promocoes = document.getElementById("promocoesDaSemana");


let listaProdutos = "";


for (let produto of produtos) {
    listaProdutos += `
        <div>
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <p>Categoria: ${produto.categoria}</p>
        </div>
    `;
}


promocoes.innerHTML = listaProdutos;