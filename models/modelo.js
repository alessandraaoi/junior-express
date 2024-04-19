// -------------- MODELO DE PRODUCTO

const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema ({
    id: {
        type: String,
        required: false,
        unique: true
    }, 
    author: { 
        type: String, 
        required: true,
    }, 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('product', productSchema);

// exporto el modelo de producto 'product' 
