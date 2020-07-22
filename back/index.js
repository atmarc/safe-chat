const bodyParser = require('body-parser')
const service = require('./service')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.set('port', (process.env.PORT || 3001))

app.get('/', (req, res) => res.send('api source root'))

app.get('/users', (req, res) => service.getUsers(req, res))

app.delete('/users/:userId', (req, res) => service.deleteUser(req, res))

app.get('/users/:userId', (req, res) => service.getUser(req, res))

app.get('/users/:userId/friends', (req, res) => service.getUserFriends(req, res))

app.post('/users/:userId/friends', (req, res) => service.addFriend(req, res))

app.post('/login', (req, res) => service.login(req, res))

app.post('/register', (req, res) => service.register(req, res))

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})