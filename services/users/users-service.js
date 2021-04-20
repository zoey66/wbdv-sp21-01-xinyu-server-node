const usersDao=require('../../daos/users-dao')
const register=(user)=>{
    usersDao.findUserByUsername(user.username)
        .then((user)=>{
            if (user){
                res.send(403)

            }else{
                return usersDao.createUser(user);
            }
        })
}

const login=(credentials)=>{
    usersDao.findUserByCredentials(credentials)
        .then((user)=>{
            return user
        })
}

const createUser=(user)=>{
    return usersDao.createUser(user);

}

const findAllUsers =()=>{
    return usersDao.findAllUsers()
}

module.exports={
    createUser,
    login,
    register,
    findAllUsers
};