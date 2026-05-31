
export default function Cart({ cartItems }) {
  
    return (
        <div className="container">
            <h2 className="text-center my-4">Carrinho de Compras</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">O carrinho está vazio.</p>
            ) : (
                <ul className="list-group">
                    {cartItems.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.name}
                            <span className="badge bg-primary rounded-pill">R$ {item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}