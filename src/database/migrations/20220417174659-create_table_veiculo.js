'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('veiculos', 
     { id: {
       type:Sequelize.BIGINT ,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
      },

      marca: {
        type:Sequelize.STRING ,
        allowNull: false
       },

       modelo: {
        type:Sequelize.STRING ,
        allowNull: false
       },

       ano: {
        type:Sequelize.BIGINT ,
        allowNull: false
       },

       preco: {
        type:Sequelize.DOUBLE ,
        allowNull: false
       },

       createdAt: {
        type: Sequelize.DATE,
        allowNull: false
       },

       updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
       },

      
      
      });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('veiculos');
 
  }
};
