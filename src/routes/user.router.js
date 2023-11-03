const { getAll,createUser,getOneUser,removeUser,updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") //users ADRESS
		.get(getAll)
        .post(createUser);

userRouter.route("/:id/") 
    .delete(removeUser)
    .put(updateUser);

module.exports = userRouter;

