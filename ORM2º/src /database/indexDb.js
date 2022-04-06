const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const automoveis = require('../api/models/automoveisModels')
const montadora = require('../api/models/montadoraModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');

} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

automoveis.init(conexao);
montadora.init(conexao);

module.exports = conexao;
