export default function Cart({cart}){
    return(
        <div className="cart">
            <h2>Carrinho</h2>
            {cart.length === 0 ? <p>O carrinho está vazio</p> :
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - R$ {item.price}</li>
                ))}
            </ul>}
        </div>
    )
}