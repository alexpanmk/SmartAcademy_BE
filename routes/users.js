var { Clerk } = require('@clerk/clerk-sdk-node');
const clerk = Clerk(process.env.CLERK_API_KEY);
var { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

//Get user with clerk token
router.get('/',  userController.getUser);


module.exports = router;
