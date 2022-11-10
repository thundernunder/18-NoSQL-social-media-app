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
    }, 

    getOneUser(req, res) {
        User.findOne({_id: req.params.userID}).select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then(userData) => {
            if(!userData) {
                return res.status(404).json({message: 'No user with this ID'
            });
        }
        res.json(userData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    }, 

    createUser(req, res) {
        User.create(req.body)
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 

    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userID}, 
            {
                $set: req.body, 
            }, 
            )
            .then((userData) => {
                if(!userData) {
                    return res.status(404).json({message: `Can't find user with this ID`});
                }
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        }, 
        
        deleteUser(req, res) {
            User.findOneAndDelete



}