'use strict';

const { Model, DataTypes } = require('sequelize');

class Automoveis extends Model {
    static init(sequelize) {
        super.init({
            aut_descricao: DataTypes.STRING,
            aut_marca: DataTypes.STRING,
            aut_condpagto: DataTypes.STRING,
            aut_valor: DataTypes.NUMBER,
            aut_ano: DataTypes.NUMBER,
            mon_codigo: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'automoveis'
        }
        );
        return this;
    }
};

Automoveis.associations = models => {
    Automoveis.hasOne(models.Automoveis)
}

module.exports = Automoveis 