const { User, Thought } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find().select('-__v')
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 

    getOneThought(req, res) {
        Thought.findOne({_id: req.params.thoughtID})
        .then((thoughtData) => {
            if(!thoughtData) {
                return res.status(404).json({message: `Can't find thought with this ID`});
        }
        res.json(thoughtData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    }, 

    addThought(req, res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                { _id: req.body.userID },
                { $push: { thoughts: thoughtData._id } },
                { new: true }
              );
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }, 

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtID}, 
            {
                $set: req.body, 
            }, 
            )
            .then((thoughtData) => {
                if(!thoughtData) {
                    return res.status(404).json({message: `Can't find thought with this ID`});
                }
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        }, 
        
        deleteThought(req, res) {
            Thought.findOneAndDelete({_id:req.params.id})
            .then((thoughtData) => {
                if(!thoughtData) {
                    res.status(404).json({message: `Can't find thought with this ID`});

                } return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                  );
            })
            .then((userData) => {
                if(!userData) {
                    return res.status(404).json({message: `Can't find user with this ID`});
                }
                res.json({message: 'Thought successfully deleted'});
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
        }, 

        addReaction(req, res) {
            Thought.findOneAndUpdate(
                {_id: req.params.thoughtID}, 
                {$addToSet: {reactions: req.params.thoughtID}}, 
                {new: true}
            )
            .then((thoughtData) => {
                if(!thoughtData) {
                    return res.status(404).json({message: `Can't find thought with this ID`});
                }
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        },

        deleteReaction(req, res) {
            Thought.findOneAndUpdate(
                {_id: req.params.thoughtID}, 
                {$pull: {friends: req.params.reactionID}}, 
                {new: true}
            )
            .then((thoughtData) => {
                if(!thoughtData) {
                    return res.status(404).json({message:`Can't find thought with this ID`});
                }
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        }
}

module.exports = thoughtController;