'use strict';

const { Model, DataTypes } = require('sequelize');

class Itempedido extends Model {
    static init(sequelize) {
        super.init({
            itp_produto: DataTypes.STRING,
            itp_quantidade: DataTypes.INTEGER,
            itp_valorunit: DataTypes.NUMBER,
            itp_valortotal: DataTypes.NUMBER,
            ped_codigo: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'itempedido'
        }
        );
        return this;
    }
};

Itempedido.associations = models => {
    Itempedido.hasOne(models.Pedido)
}

module.exports = Itempedido 