const mongoose = require('mongoose');
const ContactSchema = require('../models/crmModels');

// Création du model Contact
const Contact = mongoose.model('Contact', ContactSchema.obj);

//export de la méthode d'ajout
exports.addNewContact = (req, res) => {

    const newContact = new Contact( req.body );
    console.log(req.body);
    newContact.save((err, contact) => {
        if(err) res.send(err);
        res.json(contact);
        console.log('function addNewContact from crmControllers return: ', contact);
    });
};
// export de la méthode de liste
exports.getsContacts = (req, res) => {

    Contact.find( {}, (err, contact) => {
        if(err) res.send(err);
        res.json(contact);
        console.log('function getsContacts from crmControllers return: ', contact);
    });
};

// export de la méthode d'un contact par son id
exports.getContactById = (req, res) => {

    Contact.findById( req.params.contactId, (err, contact) => {
        if(err) res.send(err);
        res.json(contact);
        console.log('function getContactById from crmControllers return: ', contact +'With Id : '+ req.params.contactId);
    });
};

// export de la méthode de modif d'un contact par son Id
exports.updateContact = (req, res) => {

    Contact.findOneAndUpdate({_id: req.params.contactId }, req.body, {new : true}, (err, contact) => {
        if(err) res.send(err);
        res.json(contact);
        console.log('function updateContact from crmControllers return: ', contact +'modified with Id : '+ req.params.contactId);
    });
};

// export de la méthode de supression d'un contact par son Id
exports.deleteContact = (req, res) => {

    Contact.deleteOne({_id: req.params.contactId }, (err, contact) => {
        if(err) res.send(err);
        res.json(contact);
        console.log('function deleteContact from crmControllers return: ', contact +'delete on Id : '+ req.params.contactId);
    });
};