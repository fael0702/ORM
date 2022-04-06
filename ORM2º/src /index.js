const express = require('express'); 
const http = require('http');

const routesAutomoveis = require('./api/routes/automoveisRoutes');
const routesMontadora = require('./api/routes/routesMontadora');

require('./database/indexDb');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 3333);

app.use(express.json());

app.use(routesAutomoveis);
app.use(routesMontadora);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});