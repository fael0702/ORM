'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('itempedido', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      itp_produto: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      itp_quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      itp_valorunit: {
        allowNull: false,
        type: Sequelize.FLOAT(12,2),
      },
      itp_valortotal: {
        allowNull: false,
        type: Sequelize.FLOAT(12,2),
      },
      ped_codigo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pedido', key: 'id' },
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('itempedido');
  }
};
