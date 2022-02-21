const users = require("../db/users");

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    userDataEntry(req, res) {
        const findUser = users.find(user => user.email === req.body.email);
        if (findUser) {
            res.redirect('/userExist')
            return;
        }
        users.push(req.body)
        res.redirect('/users');
    }
}


module.exports = new LoginController();