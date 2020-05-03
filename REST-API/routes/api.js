const express = require('express');

const router = express.Router();


//get a list of subjects


router.get('/subjects', (request, response) => {

    response.send({type: 'GET'})
})   

// add a new subject to the category

router.post('/subjects', (request, response) => {

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