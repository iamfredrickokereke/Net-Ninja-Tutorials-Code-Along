 // import mongoose

 const mongoose = require('mongoose');
 const colors = require('colors')


 // using Es6 promise
 mongoose.Promise = global.Promise;

 //connect to mongodb database

 mongoose.connect('mongodb://localhost/fred');


//make connection before anything else

before((done) => {

    
 //create a eventlistener function once connection is open

 mongoose.connection.once('open', () => { 
    console.log(`Connection has been made now Rejoice!`.rainbow);

    done();
}).on('error', (error) => {
    console.log(`oops, something went wrong`.red, error);
    
})
})

//Drop all character collections before any test is done
beforeEach( (done) => {

    // drop the pluralised collection

    mongoose.connection.collections.mariochars.drop( () => { done() })
})