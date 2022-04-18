const Sequelize = require('sequelize')
const config = require("../config/database")
const Veiculo = require('../model/Veiculo')

const conexao = new Sequelize(config);

Veiculo.init(conexao);

module.exports = conexao;