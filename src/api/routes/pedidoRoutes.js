const express = require('express');
const router = express.Router();

const pedidoControllers = require('../controllers/pedidoControllers');

router.get('/pedido', pedidoControllers.index);

router.post('/pedido', pedidoControllers.store);

router.put('/pedido/:codigo', pedidoControllers.update);

router.delete('/pedido/:codigo', pedidoControllers.delete);

module.exports = router;
