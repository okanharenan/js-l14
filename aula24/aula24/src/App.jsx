import { useState } from 'react'
import Tabuada from './componentes/Tabuada'
import Produtos from './componentes/Produtos'
import CadastroFuncionario from './componentes/CadastroClient'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <CadastroFuncionario/>
    </div>
  
  
  
  )
}

export default App
