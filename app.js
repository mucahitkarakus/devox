const path = require('path')
const express = require('express')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const hbs = exphbs.create();

app.use(express.static('public'))

mongoose.connect('mongodb://27017/nodeblog_test_db');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('site/index')
})

app.get('/about', (req, res) => {
  res.render('site/about')
})

app.get('/blog', (req, res) => {
  res.render('site/blog')
})

app.get('/contact', (req, res) => {
  res.render('site/contact')
})

app.get('/blog-single', (req, res) => {
  res.render('site/blog-single')
})

app.get('/login', (req, res) => {
  res.render('site/login')
})

app.get('/register', (req, res) => {
  res.render('site/register')
})



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})