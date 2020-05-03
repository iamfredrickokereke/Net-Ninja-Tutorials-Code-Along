const express = require('express');

const router = express.Router();

const subject = require('../models/subjects')


//get a list of subjects


router.get('/subjects', (request, response) => {

    response.send({type: 'GET'})
})   

// add a new subject to the category

router.post('/subjects', (request, response) => {

    //  var mathsubject = new subject(request.body);

    //  mathsubject.save();

    subject.create(request.body).then((subject) => {
        response.send(subject)

        console.log('data saved');
        
    })

    response.send({
        type: 'POST',
        name: request.body.name,
        description: request.body.description,
        homepage: request.body.homepage
    
    })
})       


// update a subject from the category
router.put('/subjects/:id', (request, response) => {

    response.send({type: 'PUT'})
})       

// delete a subject from the category

router.delete('/subjects/:id', (request, response) => {

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
//         '/subjects': (request, response) => {
//             response.send({type : 'POST'})
//         }
//     }
// }