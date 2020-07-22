const store = require('./store')

function login (req, res, callback) {
    let username = req.body.username
    let password = req.body.password
    store.queryUser({username, password}, (result) => {
        // If this credentials correspond to a user
        if (result !== null) {
            delete result.password
            res.status(200).send(result)
        } 
        else {
            res.status(401).send()
        }
    })
}

function register (req, res, callback) {
    let username = req.body.username
    let password = req.body.password
    store.userNameExists(username, (exists) => {
        if (!exists) {
            store.insertUser(username, password, (result) => {
                delete result.password
                res.status(200).send(result)
            })
        }
        else {
            res.status(400).send()
        }
    })
}

function getUser (req, res, callback) {
    store.getUserPromise(req.params.userId)
        .then((result) => {
            delete result.password
            res.send(result)
        })
}

function getUsers (req, res, callback) {
    store.allUsers((result) => res.send(result))
}

function deleteUser(req, res, callback) {
    store.deleteUser(req.params.userId, (result) => {
        delete result.password
        res.send(result)
    })
}

function getUserFriends (req, res, callback) {
    let userId = req.params.userId
        store.getUser(userId, async function (user) {
        let friends = user.friends
        let returnFriends = []
        for (let friend of friends) {
            await store.getUserPromise(friend)
                .then((result) => {
                returnFriends.push({username: result.username, userId: result._id})
            })
        }
        res.send(returnFriends)
    })
}

function addFriend (req, res) {
    let friendId = req.body.friendId
    let userId = req.params.userId
    store.addFriend(userId, friendId, (result) => res.send(result))
}

module.exports = {
    login,
    register,
    getUsers,
    getUser,
    deleteUser,
    getUserFriends,
    addFriend
}