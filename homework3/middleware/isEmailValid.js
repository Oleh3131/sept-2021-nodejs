const users = require("../db/users");

function isEmailValid(req, res, next){
    try {

        const findUser = users.find(user => user.email === req.body.email);
        if(findUser){

            throw new Error("User with this email already exists!")

        }

        next();

    }catch (err) {
        console.log(err);
        res.status(515).send(err.message);
    }
}

module.exports = isEmailValid;