const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');  

const productController = require('../controller/routes-controller');

// ---------- RUTA GET (TRAER DATOS DE MONGODB: 'READ') ------------

router.get('/', productController.readProduct);

module.exports = router;