const router = require('express').Router();
// need to add controllers endpoint to all of these variables 
const getUsers = require('../../controllers/user-controller');

const getOneUser = require('../../controllers/user-controller');

const addUser = require('../../controllers/user-controller');

const updateUser = require('../../controllers/user-controller');

const deleteUser = require('../../controllers/user-controller');


const addFriend = require('../../controllers/user-controller');
const deleteFriend = require('../../controllers/user-controller');

router.route("/").get(getUsers).post(addUser);

router.route("/:userID").get(getOneUser).put(updateUser);

// need route for adding user friends
