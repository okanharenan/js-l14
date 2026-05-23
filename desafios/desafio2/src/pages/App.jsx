import { useState } from "react";
import CardUsuarios from "./CardUsuarios/CardUsuarios";

import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      nome: "Carlos Henrique",
      profissao: "Desenvolvedor Front-end",
      imagem: "https://i.pravatar.cc/150?img=1",
      online: true,
    },

    {
      id: 2,
      nome: "Marina Silva",
      profissao: "Designer de UI",
      imagem: "https://i.pravatar.cc/150?img=5",
      online: false,
    },

    {
      id: 3,
      nome: "Lucas Almeida",
      profissao: "Desenvolvedor Back-end",
      imagem: "https://i.pravatar.cc/150?img=8",
      online: true,
    },
  ];

  return (
    <div className="container">
      {users.map((user) => (
        <CardUsuarios
          key={user.id}
          imagem={user.imagm}
          nome={user.nome}
          profissao={user.profissao}
          online={user.online}
        />
      ))}
    </div>
  );
}

export default App;
