const mocha = require('mocha');

const assert = require('assert');

const marioChar = require('../models/mariochar');

const colors = require('colors')

describe('***saving records***'.yellow, () => {

    it('saves a record to db', (done) => {

        var char = new marioChar({
            name: 'mario'
        })

        char.save()
            .then(() => {
                assert(char.isNew === false);
                done()
            })
    })
})