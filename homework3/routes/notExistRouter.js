const {Router} = require('express');
const users = require('../db/users')

const notExistRouter = Router();

notExistRouter.get('/', (req, res) => {
    res.render('notExist');
})

module.exports = notExistRouter;