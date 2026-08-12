const express = require("express");
const sf = require("fs");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "API de Frutas e Legumes",
    status: 200,
    api: "V1.0.0",
  });
});

const dados = sf.readFileSync("bancoJson.json", "utf-8");
const banco = JSON.parse(dados);

app.get("/frutas", (req, res) => {
  res.status(200).json({
    status: 200,
    data: banco.frutas,
  });
});

app.get("/frutas/:id", (req, res) => {
  console.log("Entrou na rota:", req.params.id);

  const id = Number(req.params.id);

  const fruta = banco.frutas.find((f) => f.id === id);

  if (fruta) {
    return res.status(200).json({
      status: 200,
      dados: fruta,
    });
  }

  return res.status(404).json({
    status: 404,
    erro: "Fruta nao encontrada",
  });
});

app.post("/frutas", (req, res) => {
  const novaFruta = {
    id: banco.frutas.length + 1,
    nome: req.query.nome,
    preco: req.query.preco,
  };

  banco.frutas.push(novaFruta);

  sf.writeFileSync("bancoJson.json", JSON.stringify(banco, null, 2));

  res.status(201).json({
    status: 201,
    message: "Fruta adicionada com sucesso!",
    data: novaFruta,
  });
});

app.post("/legumes", (req, res) => {
  const novoLegume = {
    id: banco.legumes.length + 1,
    nome: req.query.nome,
    preco: req.query.preco,
  };

  banco.legumes.push(novoLegume);

  sf.writeFileSync("bancoJson.json", JSON.stringify(banco, null, 2));

  res.status(201).json({
    status: 201,
    message: "Legume adicionado com sucesso!",
    data: novoLegume,
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
