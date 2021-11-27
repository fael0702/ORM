'use strict';

const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            ped_nomecliente: DataTypes.STRING,
            ped_dtpedido: DataTypes.STRING,
            ped_condpagto: DataTypes.STRING,
            ped_ativoinativo: DataTypes.STRING,
            ped_ordem: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'pedido'
        }
        );
        return this;
    }
};

Pedido.associations = models => {
    Pedido.belongsTo(models.Itempedido)
}

module.exports = Pedido 
