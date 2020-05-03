const express = require('express');

const router = express.Router();

const Ninja = require('../models/ninjas')


//get a list of ninjas


router.get('/ninjas', (request, response) => {

    response.send({type: 'GET'})
})   

// add a new ninja to the category

router.post('/ninjas', (request, response) => {

    //  var mathninja = new ninja(request.body);

    //  mathninja.save();

    Ninja.create(request.body).then((ninja) => {
        response.send(ninja)

        console.log('data saved');
        
    })

    
})       


// update a ninja from the category
router.put('/ninjas/:id', (request, response) => {

    response.send({type: 'PUT'})
})       

// delete a ninja from the category

router.delete('/ninjas/:id', (request, response) => {

    response.send({type: 'DELETE'})
})       




// create and export as a module.

module.exports = router;



// router = {
//     'GET': {
//         '/':(request, response) => {
//             response.send({type: 'GET'})
//         }
//     },

//     'POST': {
//         '/ninjas': (request, response) => {
//             response.send({type : 'POST'})
//         }
//     }
// }