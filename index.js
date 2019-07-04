const express = require('express')
const routes = require('./routes/api')


//setting up express app

const app = express();
app.use('/api', require('./routes/api'));

//listening for requests

app.listen(4000, function(){
    console.log('listening to requests')
})