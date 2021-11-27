const express = require('express'); 
const http = require('http');

const routesPedido = require('./api/routes/pedidoRoutes');
const routesItem = require('./api/routes/itempedidoRoutes');

require('./database/indexDb');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3333);

app.use(express.json());

app.use(routesPedido);
app.use(routesItem);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});