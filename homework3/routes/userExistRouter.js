const {Router} = require('express');
const userExistController = require('../controllers/userExistController');

const userExistRouter = Router();

userExistRouter.get('/', userExistController.renderInfo);

module.exports = userExistRouter;