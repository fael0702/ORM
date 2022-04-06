'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('pedido', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ped_nomecliente: {
        allowNull: false,
        type: Sequelize.STRING(15),
      },
      ped_dtpedido: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ped_condpagto: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      ped_ativoinativo: {
        allowNull: false,
        type: Sequelize.STRING(1),
      },
      ped_ordem: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pedido');
  }
};
