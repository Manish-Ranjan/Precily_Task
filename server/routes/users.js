const router = require("express").Router();
const Users = require("../models/user.model");

router.get('/', (req, res, next) => {
    Users.find().then((user) => {
        res.json(user);
    })
        .catch((err) => res.status(400).json("Error " + err));
})
router.post('/add', async (req, res) => {
    const username = req.body.username;
    const newUser = new Users({ username });
    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json("Error " + err))

})

module.exports = router;