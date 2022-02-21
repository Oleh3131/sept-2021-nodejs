const users = require("../db/users");

class SignInController {

    renderSignIn(req, res) {
        res.render('signIn');
    }

    userEmailEntry({body}, res){
        const signInUser = users.filter(user => user.email === body.email && user.password === body.password);

        if (signInUser.length) {
            res.render('users', { users: signInUser });
            return
        }

        if(signInUser.length===0){
            res.redirect('/notExist');
        }
    }

}

module.exports = new SignInController();