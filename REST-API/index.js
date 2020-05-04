const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//connect to mongodb

mongoose.connect('mongodb://localhost/ninjas', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })

        .then(() => {
    console.log('mongoDB is connected...')
    })
        .catch((err) => {
    throw err
    })
    

// , (err) => { throw err}



mongoose.Promise = global.Promise;


app.use(express.static('public'))
// use body parser and return json objects  - first middle ware
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))


app.use(function (err, request, response, next) {
    response.status(422).send({error: err.message})
})


app.listen(process.env.PORT  || 8000, () => console.log('server is running...'))
