const User = require('../models/User');

async function createUser(req, res) {
    const userId = req.params.userId;
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({message: 'User has been created'});
    } catch (error) {
        console.log("Can't create new user: " + error.message); //will return error message "can't create new user" with reason.
        res.status(401).json({message: "can't create new user"});
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json({message: 'Return just 3 users'});
    } catch (error) {
        console.log("Can't get users: " + error.message); //will return error message "can't  get users" with reason.
    }
}

module.exports = {
    createUser,
    getAllUsers
}