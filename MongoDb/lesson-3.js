//Connecting to MongoDb

 // import mongoose

 const mongoose = require('mongoose');
 const colors = require('colors')


 //connect to mongodb database

 mongoose.connect('mongodb://localhost/fred');


 //create a eventlistener function once connection is open

 mongoose.connection.once('open', () => { 
     console.log(`Connection has been made now Rejoice!`.rainbow);
 }).on('error', (error) => {
     console.log(`oops, something went wrong`.red, error);
     
 })