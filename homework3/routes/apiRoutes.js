const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRoutes');
const userExistRouter = require('./userExistRouter');
const notExistRouter = require('./notExistRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);
routes.use('/userExist', userExistRouter);
routes.use('/notExist', notExistRouter);
routes.use((req, res) => {
    res.render('notFound')
});

module.exports = routes;