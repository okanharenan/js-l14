

export default function Card({product, addToCart}) {

  return (
    <div
      className={` card bg-light color-dark p-2 m-2 w-25 {border: product.promotion ? "border-danger" : "border-secondary"}`}
    >
      {product.promotion ? (
        <h5 className="card-title text-danger fw-bold">
          {product.name} - {product.price - product.descount}
        </h5>
      ) : (
        <h5 className="card-title">
          {product.name} - {product.price}
        </h5>
      )}
      <img src={product.image} alt={product.name} className="card-img-top" />
      <p className="card-text">{product.description}</p>
      {product.promotion && (
        <p className="card-text text-muted">
          <s>R$ {product.price}</s>
        </p>
      )}
      {product.promotion && (
        <p className="card-text text-success">Desconto: R$ {product.descount}</p>
      )}
      {product.promotion && (
        <p className="card-text text-danger">
          Preço com desconto: R$ {product.price - product.descount}
        </p>
      )}

      <button className="btn btn-primary" onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}
