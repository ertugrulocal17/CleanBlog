const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');
// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// RENDER PAGE
app.get('/add_post', pageController.getAddPage);
app.get('/about', pageController.getAboutPage);
app.get('/posts/edit/:id', pageController.getEditPage);

// RENDER POSTS
app.get('/', postController.getAllPosts);
app.post('/posts', postController.createPost);
app.get('/posts/:id', postController.getPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('*', (req, res) => {
  res.send('<h1>PAGE NOT FOUND</h1>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
