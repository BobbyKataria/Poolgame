//(var msg = 'hello world';
//console.log(msg);

//let express = require('express')

//let moongoose = require('mongoose')
 
//moongoose.connect(
  //  'mongodb://localhost:27017/helloworld',
    //{ useNewUrlParser: true},
    //function

//));

//api

//var app = express();

//app.get('/',(req, res) => {
 //   res.status(200).send('Hello, world!')
//});

//app.get('/getThings',(req, res) => {
  //  user.UserModel.find().then((docs) => {
    //    console.log(docs);
      //  return res.send(docs);
   // }).catch;
//});

//app.use(express.json())



//app.post('/createUser', async (req, res) => {
  //  try { 
    //    const newUser = new user.Usermodel({
      //      firstName: 'Bob'
        //    lastName: 'Kataria'
        //});
        //const userDoc = await newUser.save();
        //return 
    //} catch(exc) {
      //  return res.status(500).send(exc);
   // }
//});















//app.listen(8080, () => {
  //  console.log('listening on port 8080');
//})



// read user 

let mongoose = require("mongoose");

const express = require('express');
const app = express();
