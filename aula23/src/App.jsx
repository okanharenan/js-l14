import { useState } from 'react'
import InfoUsuarios from './componentes/InfoUsuario'
import InfoUsuarioProps from './componentes/InfoUsuarioProps'
import CardProdutos from './componentes/Produtos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='containerCards' style={{ display: "flex", gap: "20px" }}>

      <CardProdutos
        imagem="https://tse1.mm.bing.net/th/id/OIP.ROu46rV7pJSD5Lp37otg_QHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        nome="Hambúrguer Artesanal"
        preco={35}
        descricao="Hambúrguer artesanal com cheddar e bacon"
        promocao={true}
        desconto={20}
      />

      <CardProdutos
        imagem="https://supercurioso.com/wp-content/uploads/2023/04/persona-recibiendo-un-pedazo-de-pizza-de-pepperoni-con-queso.jpg_s1024x1024wisk20cokpgZ7WhSGy-697KHu_dT5N8dfYatJ7VWHouPzGmGBs.jpg"
        nome="Pizza Calabresa"
        preco={50}
        descricao="Pizza grande de calabresa com queijo"
        promocao={false}
      />

    </div>
    
  
  )
}

export default App
