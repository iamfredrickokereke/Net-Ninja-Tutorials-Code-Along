const express = require('express');

const app = express();

// const routes = require('./routes/api')


app.use('/api', require('./routes/api'))

app.listen(process.env.PORT  || 8000, () => console.log('server is running...'))
