const {Router} = require('express');
const signInController = require('../controllers/signInController');

const signInRoutes = Router();

signInRoutes.get('/', signInController.renderSignIn);

signInRoutes.post('/', signInController.userEmailEntry);
module.exports = signInRoutes;