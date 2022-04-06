'use strict';

const { Model, DataTypes } = require('sequelize');

class Montadora extends Model {
    static init(sequelize) {
        super.init({
            mon_nomeautomovel: DataTypes.STRING,
            mon_quantidade: DataTypes.INTEGER,
            mon_dtpedido: DataTypes.STRING,
            mon_condpagto: DataTypes.STRING,
            mon_ativoinativo: DataTypes.STRING,
            mon_ordem: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'montadora'
        }
        );
        return this;
    }
};

Montadora.associations = models => {
    Montadora.belongsTo(models.Montadora)
}

module.exports = Montadora 
