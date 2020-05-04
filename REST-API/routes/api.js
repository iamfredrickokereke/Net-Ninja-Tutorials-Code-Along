const express = require('express');

const router = express.Router();

const Ninja = require('../models/ninjas')


//get a list of ninjas


router.get('/ninjas', (request, response, next) => {

    /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
    // Ninja.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(request.query.lng), parseFloat(request.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // ).then(function(ninja){
    //     response.send(ninja);
    // }).catch(next);

    Ninja.aggregate()
  .near({
    near: {
      type: "Point",
      coordinates: [parseFloat(request.query.lng), parseFloat(request.query.lat)]
    },
    maxDistance: 300000, // 300 KM
    spherical: true,
    distanceField: "distance"
  })
  .then(ninjas => {
    console.log(ninjas);
    if (ninjas) {
      if (ninjas.length === 0)
        return response.send({
          message:
            "maxDistance is too small, or your query params {lng, lat} are incorrect (too big or too small)."
        });
      return response.send(ninjas);
    }
  })
  .catch(next);

})   

// add a new ninja to the category

router.post('/ninjas', (request, response, next) => {

    //  var mathninja = new ninja(request.body);

    //  mathninja.save();

    Ninja.create(request.body).then((ninja) => {
        response.send(ninja);

        console.log('data saved');
        
    }).catch(next)

    
})       


// update a ninja from the category
router.put('/ninjas/:id', (request, response, next) => {

    Ninja.findByIdAndUpdate({_id: request.params.id}, request.body).then(() => {
        Ninja.findOne({_id: request.params.id}).then((ninja) => {
            response.send(ninja)
            console.log('ninja updated successfully');
            
        })
    })
    
})       

// delete a ninja from the category

router.delete('/ninjas/:id', (request, response, next) => {


    //console.log(request.params.id);

    Ninja.findByIdAndRemove({_id: request.params.id}).then((ninja) => {
        response.send(ninja);
        console.log('ninja successfully deleted');
    });
        
    // }).catch((err) => {response.send(err)})
    
    // response.send({type: 'DELETE'})
})       




// create and export as a module.

module.exports = router;



