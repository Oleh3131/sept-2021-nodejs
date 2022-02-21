const {Router} = require('express');
const users = require('../db/users')

const signInRoutes = Router();

signInRoutes.get('/', (req, res) => {
    res.render('signIn');
});

signInRoutes.post('/', ({body}, res) => {

    const signInUser = users.filter(user => user.email === body.email && user.password === body.password);

    if (signInUser.length) {
        res.render('users', { users: signInUser });
        return
    }

    if(signInUser.length===0){
        res.redirect('/notExist');
    }
})

module.exports = signInRoutes;