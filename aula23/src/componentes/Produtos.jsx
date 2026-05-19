export default function CardProdutos({imagem, nome, preco, descricao, promocao, desconto}){
    const precoComDesconto = preco - (preco * desconto /100)
    return(
        <div style={{border: promocao ? "3px solid red": "3px solid blue"}} className="cardProduto">
            <img src={imagem} alt={nome} style={{ width: "100%", borderRadius: "10px"}}/>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            {
                promocao ? (
                    <div>
                        <p style={{ textDecoration: "line-through", color: "gray" }}>
                            R$ {preco.toFixed(2)}
                        </p>

                        <p style={{ color: "red", fontWeight: "bold"}}>
                        R$ {precoComDesconto.toFixed(2)}
                        </p>


                    </div>
                ):(
                <p style={{ fontWeight: "bold" }}>
                    R$ {preco.toFixed(2)}
                </p>
                )
            }

        </div>
    )
}