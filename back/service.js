const store = require('./store')

function login (req, res, callback) {
    let username = req.body.username
    let password = req.body.password
    store.getUser({username, password}, (result) => {
        // If this credentials correspond to a user
        if (result !== null) {
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
                res.status(200).send(result)
            })
        }
        else {
            res.status(400).send()
        }
    })
}

function getUsers (req, res, callback) {
    store.allUsers((result) => res.send(result))
}

function deleteUser(req, res, callback) {
    let username = req.body.username
    store.deleteUser({username}, (result) => res.send(result))
}

module.exports = {
    login,
    register,
    getUsers,
    deleteUser
}