const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// creating the schema for the model

const mariocharSchema = new Schema({
    name : String,
    weight: Number
})


// model

const marioChar = mongoose.model('mariochar', mariocharSchema)


//export the model
module.exports = marioChar;

