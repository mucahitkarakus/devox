const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const app = express()

const port = 3000
const hostname = '127.0.0.1'
const hbs = exphbs.create();

app.use(express.static('public'))

mongoose.connect('mongodb://27017/nodeblog_db');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


const main = require('./routes/main')
const posts = require('./routes/posts')

app.use('/', main)
app.use('/posts', posts)

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
