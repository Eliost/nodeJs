const mongoose = require('mongoose');
const PlayersSchema = require('../models/crmModelsPlayers');

// Création du model Players
const Player = mongoose.model('Joueur', PlayersSchema.objJoueurs);

//export de la méthode d'ajout
exports.addNewPlayer = (req, res) => {

    const newPlayer = new Player( req.body );
    console.log(req.body);
    newPlayer.save((err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function addNewPlayer from crmControllersPlayers return: ', player);
    });
};
// export de la méthode de liste
exports.getsPlayers = (req, res) => {

    Player.find({}, (err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function getsPlayers from crmControllers return: ', player);
    });
};

// export de la méthode d'un player par son id
exports.getPlayerById = (req, res) => {
    Player.findById( req.params.playerId, (err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function getPlayerById from crmControllers return: ', player +'With Id : '+ req.params.playerId);
    });
};
//export de la méthode d'un player en fonction de son idContact
exports.getPlayerByContactId = (req, res) => {
    Player.find(req.params.contactId, (err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function getPlayerByContactId from crmControllers return: ', player +' With Id : '+ req.params.contactId);
    });
};

// export de la méthode de modif d'un player par son Id
exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.playerId }, req.body, {new : true}, (err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function updatePlayer from crmControllers return: ', player +'modified with Id : '+ req.params.playerId);
    });
};

// export de la méthode de supression d'un player par son Id
exports.deletePlayer = (req, res) => {

    Player.deleteOne({_id: req.params.playerId }, (err, player) => {
        if(err) res.send(err);
        res.json(player);
        console.log('function deletePlayer from crmControllers return: ', player +'delete on Id : '+ req.params.playerId);
    });
};