import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Notebook Gamer",
      price: 4500,
      image: "https://placehold.co/300x200?text=Notebook",
      description: "Notebook potente para jogos e tarefas exigentes.",
      promotion: false,
      descount: 0,
    },
    {
      id: 2,
      name: "Mouse RGB",
      price: 150,
      image: "https://placehold.co/300x200?text=Mouse",
      description: "Mouse de qualidade para jogos e tarefas exigentes.",
      promotion: true,
      descount: 50,
    },
    {
      id: 3,
      name: "Teclado Mecânico",
      price: 350,
      image: "https://placehold.co/300x200?text=Teclado",
      description: "Teclado de qualidade para jogos e tarefas exigentes.",
      promotion: false,
      descount: 0,
    },
    {
      id: 4,
      name: "Monitor Ultrawide",
      price: 1800,
      image: "https://placehold.co/300x200?text=Monitor",
      description:
        "Monitor ultrawide para imersão total em jogos e produtividade.",
      promotion: true,
      descount: 10,
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
      <div className="header">
        <Header />
        <p className="text-center mt-2">Itens no carrinho: {cart.length}</p>
      </div>
      <div className="container d-flex flex-wrap justify-content-center">
        {products.length === 0 ? (
          <p>Não há produtos disponíveis</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              nome={product.name}
              preco={product.price}
              imagem={product.image}
              descricao={product.description}
              promocao={!!product.descount}
              desconto={product.descount}
              addToCart={(product) => setCart([...cart, product])}
            />
          ))
        )}
      </div>

      <div className="cart">
        <Cart cartItems={cart} />
        <p className="text-center mt-3">Total: R$ {cart.reduce((total, item) => total + item.price, 0)}</p>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
