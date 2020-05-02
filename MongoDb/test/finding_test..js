const mocha = require('mocha');

const assert = require('assert');

const marioChar = require('../models/mariochar');

const colors = require('colors')

describe('***saving records***'.yellow, () => {


    beforeEach( (done) => {

        var char = new marioChar({
            name: 'mario'
        })

        char.save().then( () => {
            done()
        })
    });

    it('find a record', (done) => {

       marioChar.findOne({ name : 'mario'}).then(function (result) {

            assert(result.name === 'mario');
            done()
       })
    })

    it('[By ID] find a record ', (done) => {

        marioChar.findOne({ _id : char._id}).then(function (result) {
 
             assert(result._id.toString() === char._id.toString());
             done()
        })
     })
})