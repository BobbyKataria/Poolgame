var express = require('express');
var router = express.Router();
var Users = require('../schemas/users-schema');
var paramHandler = require('../handlers/param-handler');
var utils = require('../utils');


router.get('/all', (req, res) => {
    return Users.UserModel.find().then((doc) => {
        return res.send(doc);
    });
});

router.post('/create', (req, res, next) => {
    const newUser = new Users.UserModel(req.body);
    return newUser.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});

router.get('/byFirstName',
    (req, res, next) => paramHandler(req, res, ['firstName'], next),
    (req, res) => {
        const { firstName } = req.query;
        return Users.UserModel.find({ firstName }).then(
            doc => res.send(doc),
            error => res.send(500).send(error)
        );
    });

