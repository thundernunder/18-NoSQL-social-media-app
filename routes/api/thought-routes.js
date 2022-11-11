const router = require('express').Router();
// need to add controllers endpoint to all of these variables 
const {
    getThoughts, 
    getOneThought, 
    addThought,
    updateThought,
    deleteThought, 
    addReaction, 
    deleteReaction,
} = require('../../controllers/thought-controller');
// const getThoughts = require('../../controllers/thought-controller');

// const getOneThought = require('../../controllers/thought-controller');

// const addThought = require('../../controllers/thought-controller');

// const updateThought = require('../../controllers/thought-controller');

// const deleteThought = require('../../controllers/thought-controller');


// const addReaction = require('../../controllers/thought-controller');
// const deleteReaction = require('../../controllers/thought-controller');

router.route("/").get(getThoughts).post(addThought);

router.route("/:thoughtID").get(getOneThought).put(updateThought).delete(deleteThought);

// need route for adding thought reactions
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);
module.exports = router;