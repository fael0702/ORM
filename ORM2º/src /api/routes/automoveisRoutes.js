const express = require('express');
const router = express.Router();

const automoveisControllers = require('../controllers/automoveisControllers');

router.get('/automoveis', automoveisControllers.index);

router.post('/automoveis', automoveisControllers.store);

router.put('/automoveis/:codigo', automoveisControllers.update);

router.delete('/automoveis/:codigo', automoveisControllers.delete);

module.exports = router;