const mongoose = require('mongoose');
const CarsSchema = require('../models/crmModelsCars');

// Création du model Players
const Car = mongoose.model('Voiture', CarsSchema.objcars);

//export de la méthode d'ajout
exports.addNewCar = (req, res) => {

    const newCar = new Car( req.body );
    console.log(req.body);
    newCar.save((err, car) => {
        if(err) res.send(err);
        res.json(car);
        console.log('function addNewCar from crmControllersPlayers return: ', car);
    });
};
// export de la méthode de liste
exports.getsCars = (req, res) => {

    Car.find({}, (err, car) => {
        if(err) res.send(err);
        res.json(car);
        console.log('function getsCars from crmControllers return: ', car);
    });
};

// export de la méthode d'un player par son id
exports.getCarById = (req, res) => {
    Car.findById( req.params.carId, (err, car) => {
        if(err) res.send(err);
        res.json(car);
        console.log('function getCarById from crmControllers return: ', car +'With Id : '+ req.params.carId);
    });
};

// export de la méthode de modif d'un player par son Id
exports.updateCar = (req, res) => {
    Car.findOneAndUpdate({_id: req.params.carId }, req.body, {new : true}, (err, car) => {
        if(err) res.send(err);
        res.json(car);
        console.log('function updateCar from crmControllers return: ', car +'modified with Id : '+ req.params.carId);
    });
};

// export de la méthode de supression d'un player par son Id
exports.deleteCar = (req, res) => {

    Car.deleteOne({_id: req.params.carId }, (err, car) => {
        if(err) res.send(err);
        res.json(car);
        console.log('function deleteCar from crmControllers return: ', car +'delete on Id : '+ req.params.carId);
    });
};