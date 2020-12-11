// import des methodes du controller
const crmControllers = require('../controllers/crmControllers');
const crmControllersPlayers = require('../controllers/crmControllersPlayers');
const crmControllersCars = require('../controllers/crmControllersCars');

const routes = (app) => {
    //routes initiale des contacts
    app.route('/contact')
    // get pour lister tous les contacts 
    .get( (req, res, next) =>{
       console.log('method get from ' + req.originalUrl);
       console.log('method ? ' + req.method);
       next();
    }, crmControllers.getsContacts)
    // post pour créer un nouveau contact
    .post( crmControllers.addNewContact );

    //route de gestion d'un contact
    app.route('/contact/:contactId')
    // retourne un seul contact par son Id
    .get(crmControllers.getContactById)

    // put pour modifier un contact
    .put(crmControllers.updateContact)
    
    // delete pour effacer un contact
    .delete(crmControllers.deleteContact);


    //routes pour joueur
    app.route('/joueur')
    .get( (req, res, next) =>{
        console.log('method get from ' + req.originalUrl);
        console.log('method ? ' + req.method);
        next();
     }, crmControllersPlayers.getsPlayers)
     // post pour créer un nouveau contact
     .post( crmControllersPlayers.addNewPlayer );
 
     //route de gestion d'un player en fonction d'un contact
     //retourne un seul joueur par son contactId
     app.route('/joueur/fichejoueur/:contactId')
     .get(crmControllersPlayers.getPlayerByContactId);

     //route de gestion d'un player
     app.route('/joueur/:playerId')
     // retourne un seul player par son Id
     .get(crmControllersPlayers.getPlayerById)
 
     // put pour modifier un contact
     .put(crmControllersPlayers.updatePlayer)
     
     // delete pour effacer un contact
     .delete(crmControllersPlayers.deletePlayer);
 
   //routes pour voiture
   app.route('/car')
   .get( (req, res, next) =>{
       console.log('method get from ' + req.originalUrl);
       console.log('method ? ' + req.method);
       next();
    }, crmControllersCars.getsCars)
    // post pour créer une nouvelle voiture
    .post( crmControllersCars.addNewCar );

    //route de gestion d'une voiture
    app.route('/car/:carId')
    // retourne une seul voiture par son Id
    .get(crmControllersCars.getCarById)

    // put pour modifier une voiture
    .put(crmControllersCars.updateCar)
    
    // delete pour effacer une voiture
    .delete(crmControllersCars.deleteCar);  
};
exports.routes = routes;