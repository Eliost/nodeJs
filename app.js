const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// chargement des routes dans le router
const router = require('./src/routes/crmRoutes');
const app = express();
const port = 3000;

//Connexion BDD
//mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/CRM_DB', { useNewUrlParser: true, useUnifiedTopology: true}, () =>{
    console.log('CONNEXION CRM_DB OK !');
});

//Body-parser pour traiter requests en JSON 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// on fait passer l'app dans notre methode routes
router.routes(app);

//gestion de app express
app.use (express.static('public'));
const message = 'Express is running on port '+port;
app.get('/', (req, res) => {
    res.send(message);
});

app.listen(port, () => {
    console.log(message);
});