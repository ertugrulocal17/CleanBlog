const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts: posts,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.getPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('post', {
    post: post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.description = req.body.description;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  await Post.findByIdAndRemove(post);
  res.redirect('/');
};
