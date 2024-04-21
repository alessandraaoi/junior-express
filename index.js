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

app.listen(process.env.PORT, () => console.log('Started server'))