const mongoose = require('mongoose');

const Schema = mongoose.Schema;
exports.objcars = new Schema({
    marque: {
        type: String,
        required: 'Entrer une marque svp'
    },
    couleur: {
        type: String,
        required: 'Entrer une couleur svp'
    },
    puissance: Number,
    chevaux: Number,
    autres: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});