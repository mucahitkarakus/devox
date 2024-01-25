
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('site/index')
})

router.get('/about', (req, res) => {
    res.render('site/about')
})

router.get('/blog', (req, res) => {
    res.render('site/blog')
})

router.get('/contact', (req, res) => {
    res.render('site/contact')
})

router.get('/blog-single', (req, res) => {
    res.render('site/blog-single')
})

router.get('/login', (req, res) => {
    res.render('site/login')
})

router.get('/posts/new', (req, res) => {
    res.render('site/addpost')
})

router.get('/register', (req, res) => {
    res.render('site/register')
})

router.post('/posts/test', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router