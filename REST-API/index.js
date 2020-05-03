const express = require('express');

const app = express();


app.use('/api', require('./routes/api'))

app.listen(process.env.PORT  || 8000, () => console.log('server is running...'))
