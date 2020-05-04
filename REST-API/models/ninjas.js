const mongoose = require('mongoose');

//connect to schema

const Schema = mongoose.Schema;

// create the geolocation schema

const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point" 
    },

    coordinates:{
        type: [Number],
        index: "2Dsphere"
    }
});




const NinjaSchema = new Schema({
   

    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    rank: {
        type: String,

    },

    available: {
        type: Boolean,
        default: false
    },

    geometry: GeoSchema


})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;