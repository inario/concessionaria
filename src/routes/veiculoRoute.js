const express = require('express')

const routes = express.Router()

const veiculoController = require('../controller/veiculoController')

routes.get('/', veiculoController.list)

routes.post('/',veiculoController.filtro)

routes.get('/add',veiculoController.abreadd)

routes.post('/add',veiculoController.add)

routes.get('/edit/:id',veiculoController.abreedit)

routes.post('/edit/:id',veiculoController.edit)

routes.get('/del/:id',veiculoController.del)

module.exports = routes;