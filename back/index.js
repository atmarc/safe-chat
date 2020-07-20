const bodyParser = require('body-parser')
const service = require('./service')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('port', (process.env.PORT || 3001))


app.get('/', (req, res) => {
    res.send('api source root')
})

app.post('/login', (req, res) => {
    service.login(req, res)
})

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})