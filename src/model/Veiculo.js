const {Model, DataTypes} = require('sequelize')

class Veiculo extends Model {
    static init(sequelize){
        super.init({
            marca: DataTypes.STRING,
            modelo: DataTypes.STRING,
            ano: DataTypes.BIGINT,
            preco: DataTypes.DOUBLE,
        },{sequelize,tableName:'veiculos'})
    }
}

module.exports = Veiculo;