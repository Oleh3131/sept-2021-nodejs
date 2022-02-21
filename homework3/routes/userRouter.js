const {Router} = require('express');
const users=require('../db/users')

const userRouter = Router();

userRouter.get('/', (req, res) => {

    if (req.query.city) {
        let userFilter = users.filter(user => user.city === req.query.city);
        return res.render('users', {users: userFilter});

    }
    if (req.query.age) {
        let userFilter = users.filter(user => user.age === req.query.age);
        return res.render('users', {users: userFilter});

    }

    res.render('users', {users});

});

userRouter.get('/:userId', (req, res) => {

    const userIdMain = users.map((item, index) => {
        item.id = index + 1;
        return item;
    });

    const filter = users.filter(user => user.id === +req.params.userId);

    res.json({filter});

});


module.exports = userRouter;