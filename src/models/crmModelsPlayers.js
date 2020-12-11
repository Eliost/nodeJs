const mongoose = require('mongoose');
//Model pour la création d'un schéma joueurs
const Schema = mongoose.Schema;
exports.objJoueurs = new Schema({
    idContact:{
        type:String
    },
    prenom:{
        type: String,
        required: 'entrer un prenom svp'
    },
    nom: {
        type: String,
        required:'entrer un nom svp'
    },
    email:{
        type: String
    },
    team:{
        type:String
    },
    amountTransfert: {
        type:Number
    }
});