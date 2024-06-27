const express = require ('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(2020, console.log("Funcionando na porta 2020"));