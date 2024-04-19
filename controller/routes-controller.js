const mongoose = require ('mongoose');

const product = require('../models/modelo');

// -------------- PETICIÓN GET

exports.readProduct = async (req,res) => { 
try{
    const products = await product.find();
    res.json(products)
} catch (err) {
    console.error('Error: ' + err.stack)
}
}