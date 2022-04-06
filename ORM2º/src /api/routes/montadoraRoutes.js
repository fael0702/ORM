const express = require('express');
const router = express.Router();

const montadoraControllers = require('../controllers/montadoraControllers');

router.get('/montadora', montadoraControllers.index);

router.post('/montadora', montadoraControllers.store);

router.put('/montadora/:codigo', montadoraControllers.update);

router.delete('/montadora/:codigo', montadoraControllers.delete);

module.exports = router;
