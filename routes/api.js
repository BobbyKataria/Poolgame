const express = require('express')

const router = express.Router();

//get a list of user data
router.get('/get', function(req,res){
    res.send({type:'GET'});
});

//adding users
router.post('/post', function(req,res){
    res.send({type:'POST'});
});

//updating users
router.put('/put/:id', function(req,res){
    res.send({type:'PUT'});
});

//deleting users
router.get('/delete:id', function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router