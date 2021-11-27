const express = require('express');
const router = express.Router();

const itempedidoControllers = require('../controllers/itempedidoControllers');

router.get('/itempedido', itempedidoControllers.index);

router.post('/itempedido', itempedidoControllers.store);

router.put('/itempedido/:codigo', itempedidoControllers.update);

router.delete('/itempedido/:codigo', itempedidoControllers.delete);

module.exports = router;