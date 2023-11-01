const { getAll,createUser,getOneUser,removeUser,updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/") //users ADRESS
		.get(getAll)
        .post(createUser);

module.exports = userRouter;

