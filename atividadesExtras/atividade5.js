

let Livraria = {
    nome: "Livraria do Cleitinho",
    livros: [
        { titulo: "Livro A", autor: "Autor 1", preco: 30 },
        { titulo: "Livro B", autor: "Autor 2", preco: 80 },
        { titulo: "Livro C", autor: "Autor 3", preco: 80 },
        { titulo: "Livro D", autor: "Autor 4", preco: 120 },
        { titulo: "Livro E", autor: "Autor 5", preco: 20 }
    ]
}
let ultimoPreco = null
let posicaoAtual = 0
let ranking = [... Livraria.livros]
.sort((a, b) => {
    if (b.preco !== a.preco){
        return b.preco - a.preco
    }
    return a.titulo.localeCompare(b.titulo)// desempata por titulo 
})
.map((livro , index) =>{
    if( livro.preco !== ultimoPreco){
        posicaoAtual = index +1
    }
    ultimoPreco = livro.preco

    return{
        posicao: posicaoAtual,
        titulo: livro.titulo,
        preco: livro.preco
    }
})

let top3 = ranking.filter(i => i.posicao <= 3)

console.log(top3)

