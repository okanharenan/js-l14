import CardProduto from "./CardProdutos";
export default function Produtos(produtos, categoria) {
    return (
        <div>
            <h1>{categoria}</h1>
            <div className="produtos">
                {produtos.map(produto => (
                    <CardProduto
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </div>
    )

}