const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

const funcionario_controle = require('./routes/api/funcionario');
const cliente_controle = require('./routes/api/cliente');
const estoque_controle = require('./routes/api/item_estoque');
const vitrine_controle = require('./routes/api/item_vitrine');
const carrinho_controle = require('./routes/api/carrinho');

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

//uso das rotas
app.use('/funcionario', funcionario_controle);
app.use('/cliente',cliente_controle);
app.use('/estoque',estoque_controle);
app.use('/vitrine',vitrine_controle);
app.use('/carrinho',carrinho_controle);



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));