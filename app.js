const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const { render } = require('express/lib/response');
// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts: posts,
  });
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post: post,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
