{
    "name": "ryu",
    "rank": "black belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80, 25.791]}
  }
  
  {
    "name": "ken",
    "rank": "red belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.245, 25.391]}
  }
  
  {
    "name": "chun li",
    "rank": "purple belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.789, 25.701]}
  }
  
  {
    "name": "Guile",
    "rank": "brown belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-81.1, 24.95]}
  }
  
  {
    "name": "Dhalsim",
    "rank": "yellow belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-80.750, 24.60]}
  }
  
  {
    "name": "E Honda",
    "rank": "no belt",
    "available": true,
    "geometry" : {"type": "point", "coordinates": [-81.500, 24.10]}
  }

  Ninja.aggregate().near({
    near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
    maxDistance: 100000,
    spherical: true,
    distanceField: "dist.calculated"
   })

   Ninja.aggregate()
  .near({
    near: {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 300000, // 300 KM
    spherical: true,
    distanceField: "distance"
  })
  .then(ninjas => {
    console.log(ninjas);
    if (ninjas) {
      if (ninjas.length === 0)
        return res.send({
          message:
            "maxDistance is too small, or your query params {lng, lat} are incorrect (too big or too small)."
        });
      return res.send(ninjas);
    }
  })
  .catch(next);