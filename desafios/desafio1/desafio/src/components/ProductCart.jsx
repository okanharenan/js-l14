export default function ProductCart({product, addToCart}){
    return(
        <div className="product-cart">
            <a href={product.image} target="_blank"><img src={product.image} alt={product.name} /></a>
            <h2>{product.name}</h2>
            <p> R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
        </div>
    )
}