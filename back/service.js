function login (req, res, callback) {
    let username = req.body.username
    let password = req.body.password
    res.sendStatus(200)
}

function register (req, res, callback) {
    let username = req.body.username
    let password = req.body.password
    res.sendStatus(200)
}

module.exports = {
    login,
    register
}