function isUserValid(req, res, next) {

    try {
        const {firstname, lastname, email, password, age, city} = req.body;

        if (!firstname || !lastname || !email || !password || !age || !city) {

            throw new Error("One of the parameters was not passed!")

        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;