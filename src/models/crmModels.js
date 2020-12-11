const mongoose = require('mongoose');

const Schema = mongoose.Schema;
exports.obj = new Schema({
    prenom: {
        type: String,
        required: 'Entrer un prenom svp'
    },
    nom: {
        type: String,
        required: 'Entrer un nom svp'
    },
    email: String,
    age: Number,
    message: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});