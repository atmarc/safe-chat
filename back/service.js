function login (req, res, callback) {
    console.log(req.body)
    res.send(200)
}

module.exports = {
    login
}