const {Router} = require('express');
const signInController = require('../controllers/signInController');
const emailMiddleware = require('../middleware/isEmailValid');

const signInRoutes = Router();

signInRoutes.get('/', signInController.renderSignIn);

signInRoutes.post('/',emailMiddleware, signInController.userEmailEntry);

module.exports = signInRoutes;