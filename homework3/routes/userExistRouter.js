const {Router} = require('express');
const users = require('../db/users')

const userExistRouter = Router();

userExistRouter.get('/', (req, res) => {
    res.render('userExist');
});

module.exports = userExistRouter;