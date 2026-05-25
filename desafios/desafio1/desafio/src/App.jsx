import { useState } from "react";
import Header from "./components/Header";
import ProductCart from "./components/ProductCart";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Notebook Gamer",
      price: 4500,
      image: "https://placehold.co/300x200?text=Notebook",
    },
    {
      id: 2,
      name: "Mouse RGB",
      price: 150,
      image: "https://placehold.co/300x200?text=Mouse",
    },
    {
      id: 3,
      name: "Teclado Mecânico",
      price: 350,
      image: "https://placehold.co/300x200?text=Teclado",
    },
    {
      id: 4,
      name: "Monitor Ultrawide",
      price: 1800,
      image: "https://placehold.co/300x200?text=Monitor",
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart({product}){
    setCart([...cart, product])
  }

  return (
  
      <div className="container">
        <Header quantidade = {cart.length}/>
        <div className="products">
          {products.map((product) =>(
            <ProductCart key={product.id} product={product} addToCart={(product) => setCart([...cart, product])}
            />
          ))}
          </div>
         <Cart cart={cart}/>
  
      </div>
      
      
  );
}

export default App;
