const express = require('express');
const routes = require('./api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./userSchema');
//setting up express app

const app = express();

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/UserDB", {
    useNewUrlParser: true
    },
    function (err){
        if(err){
            console.log("Connection Failed");
        }else{
            console.log("Connection Succeeded");
        }
    }
);

//parsing JSON data and attaching to body
app.use(bodyParser.json());

//initialising routes
app.use('/api', routes);

//listening for requests

app.listen(4000, function(){
    console.log('listening to requests')
})

//createuser
app.post('/users', async (req, res) => {
    console.log(req.body);
    try {
        const newUser = new User.UserModel(req.body);
        const userDoc = await newUsers.save();
        return res.status(201).send(userDoc);
    } catch (postError) {
        console.log(postError);
        return res.status(501).send(postError);
    }
});