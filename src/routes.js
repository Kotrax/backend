const express = require('express');
const controllers = require('./controllers/constrollerProd');
const controllersC = require('./controllers/controllerCli');
const controllerComp = require('./controllers/controllerComp');

const routes = express.Router();

// Produtos

routes.get('/produtos', controllers.produto);
routes.get('/produtosnome/:nome', controllers.prodsNome);
routes.post('/produtos', controllers.cads);
routes.put('/produtos/:codpro', controllers.updateProd);
routes.delete('/produtos/:codpro', controllers.deleteProd);

// Clientes

routes.get('/clientes', controllersC.cliente);
routes.post('/clientes', controllersC.cads);
routes.put('/clientes/:codcli',controllersC.updateCli);
routes.delete('/clientes/:codcli',controllersC.deleteCli);

// Compras

routes.post('/compras',controllerComp.createComp);
routes.get('/compras', controllerComp.searchComp);
routes.get('/comprascod/:codcomp', controllerComp.searchCompCod);


module.exports = routes;