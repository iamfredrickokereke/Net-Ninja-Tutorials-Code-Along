const express = require('express');

const app = express();
const Router = express.Router();


app.get('/', (request, response) => {

    response.send({type : "GET"})
    console.log("root request");
    
} )

app.listen(process.env.PORT  || 8000, () => console.log('server is running...'))
