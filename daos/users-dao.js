const usersModel = require("../models/users/users-model")

const findAllUsers=()=>{
    return usersModel.find();
}

const findUserById =(userId)=>{
    return usersModel.findById(userId);
}

const findUserByUsername = (username) => {
    // return usersModel.find({username: username})
    return usersModel.find({username})
}

const findUserByCredentials = (username,password) => {
    return usersModel.findOne({
        username: username,
        password: password
    })
    // return usersModel.find({username})
}

const createUser = (user) => {
    return usersModel.create(user)
}

module.exports = {
    findUserByUsername,
    findUserByCredentials,
    createUser,
    findAllUsers,
    findUserById
}