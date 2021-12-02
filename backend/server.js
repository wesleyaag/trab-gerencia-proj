const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

const funcionario_controle = require('./routes/api/funcionario');
const cliente_controle = require('./routes/api/cliente');

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

//uso das rotas
app.use('/funcionario', funcionario_controle);
app.use('/cliente',cliente_controle);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));