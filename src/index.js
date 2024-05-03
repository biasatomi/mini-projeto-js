const express = require('express');
const app = express();
const rotas = require('./rotas');

app.use(express.json());

rotas(app);

app.listen(3000);