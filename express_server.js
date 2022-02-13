//Package imports
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./controllers/userControllers');
const PORT = process.env.PORT || 4900;

//Api Routes
app.use(express.json()); //tell app to use json
app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);

//Listener
app.listen(PORT, function () {
    console.log('Server listening on port 4900');
    mongoose.connect(process.env.DB_URL) 
    .then(function() {
        console.log('DB is connected');
    }).catch(function (error) {
        console.log('Error connecting to DB: ' + error.message);
    });
});
