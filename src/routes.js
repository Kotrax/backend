//Variáveis 

const express = require ('express');
const controllerProd = require('./controllers/controllerProd');
const controllerCli = require('./controllers/controllerCli');
const controllerComp = require('./controllers/controllerComp');

const routes = express.Router();

//Rotas de Produtos

routes.get('/produtos',controllerProd.prodGeral);
routes.post('/produtos',controllerProd.prodCreat);
routes.put('/produtos/:codpro',controllerProd.prodUpdate);
routes.delete('/produtos/:codpro',controllerProd.prodDelete);

//Rotas de Clientes 

routes.get("/Clientes", controllerCli.cliGeral);
routes.post("/Clientes", controllerCli.cliCreat);
routes.put("/Clientes/:codcli", controllerCli.cliUpdate);
routes.delete("/Clientes/:codcli", controllerCli.cliDelete);

module.exports = routes;

//Rotas de Compras

routes.get("/compras", controllerComp.searchComp);
routes.post("/compras",controllerComp.createComp);
routes.put("/compras/:codcomp",controllerComp.UpdateComp);
routes.delete("/compras/:codcomp",controllerComp.DeleteComp);
