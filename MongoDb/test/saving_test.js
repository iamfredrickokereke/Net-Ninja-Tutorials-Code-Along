const mocha = require('mocha');

const assert = require('assert');

const marioChar = require('../models/mariochar');


describe('saving records', () => {

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