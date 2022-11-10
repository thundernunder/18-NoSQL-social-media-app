const { User, Thought } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find().select('-__v')
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}