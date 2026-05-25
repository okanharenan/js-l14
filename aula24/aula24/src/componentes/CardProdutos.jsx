// CardProduto.jsx

export default function CardProduto({ nome, preco, descricao, imagem }) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} width="150" />

            <h2>{nome}</h2>

            <p>{descricao}</p>

            <h3>R$ {preco}</h3>
        </div>
    );
}