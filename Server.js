var express = require('express')
var app = express()
var port = 3001
var v = require('./myModule')
var page = 'index'

app.listen(port, (err, res) => {
    if (err) throw err
    console.log("listening on port "+port)
})

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(page)
    console.log(v)
    req.on('close', console.log("CLOSE"))
    
})

app.get('/x', (req, res) => {
    console.log("GET REQUEST")
    //page = 'about'
    res.json(v)
})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
