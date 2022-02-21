const {Router} = require('express');
const notExistController = require('../controllers/notExistController');

const notExistRouter = Router();

notExistRouter.get('/', notExistController.renderInfo);

module.exports = notExistRouter;