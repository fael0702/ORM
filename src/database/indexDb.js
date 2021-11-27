const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const item = require('../api/models/itempedidoModels')
const pedido = require('../api/models/pedidoModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');

} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

item.init(conexao);
pedido.init(conexao);

module.exports = conexao;
