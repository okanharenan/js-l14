export default function Header({ quantidade }) {
  return (
    <div className="header">
      <h1>Loja vitual</h1>

      {quantidade <= 1 ? 
        <h2>quantidade carrinho: {quantidade} item</h2>
       : 
        <h2> quantidade carrinho: {quantidade} itens</h2>
      }
    </div>
  );
}
