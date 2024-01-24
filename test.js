const mongoose = require('mongoose');
const Post = require('./models/post');

mongoose.connect('mongodb://localhost:27017/nodeblog_db');

Post.find({});

mongoose.connection.once('open', async () => {
    try {
        const newPost = new Post({
            title: 'Hello This is first 2',
            content: 'Hello This is first 2'
        });
        const savedPost = await newPost.save();
    } catch (err) {
        console.error('Post kaydetme hatası: ' + err);
    }
});
