const mocha = require('mocha');

const assert = require('assert');


// describe the test

describe('Some demo test', () => {

    it('Adds 2 numbers', () => {
        assert( 2 + 2 === 4);
    })
});