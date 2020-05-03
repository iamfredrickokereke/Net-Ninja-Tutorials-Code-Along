const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// const routes = require('./routes/api')

// use body parser and return json objects
app.use(bodyParser.json())
app.use('/api', require('./routes/api'))

app.listen(process.env.PORT  || 8000, () => console.log('server is running...'))
