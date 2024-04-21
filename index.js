const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routerProducts = require('./router/routes');

require ('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extendend: true}));

mongoose.connect(process.env.DB_CONNECTION || '')

const connection = mongoose.connection;

connection.once('open', () => console.log('Connected to Mongo'))
connection.on('error', (err) => console.log('Error to connect: ' + (err)))

app.use('/products', routerProducts); 

// --------- Creo dos manejadores de errores 404 y 500 para la ruta: /products;
routerProducts.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada, ERROR 404!');   
})

routerProducts.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('ERROR 500, ERROR EN EL SERVIDOR!');
})

app.listen(process.env.PORT, () => console.log('Started server'))