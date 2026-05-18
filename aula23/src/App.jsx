import { useState } from 'react'
import InfoUsuarios from './componentes/InfoUsuario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InfoUsuarios/>
  )
}

export default App
