const express = require('express');
const router = express.Router();
const User = require('./userSchema');

//get a list of user data
router.get('/users', function(req,res){
    res.send({type:'GET'});
});

//adding users
router.post("/users", function(req, res, next){
    User.create(req.body).then(function(user){
    res.send(user);
    }).catch(next);
});

//updating users
router.put("/users/:id", function(req, res){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send({user});
        })
    });
});


//deleting users
router.delete("/users/:id", function(req, res){
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
    });
    res.send({type:"DELETE"});
});

router.delete("/users/:name", function(req, res){
    User.findOneAndRemove({name: req.params.name}).then(function(user){
        res.send(user);
    });
    res.send({type:"DELETE"});
});

module.exports = router;