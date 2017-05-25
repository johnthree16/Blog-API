'use strict';
var express = require('express');
var router = express.Router();
var BlogPosts = require('../models/models');
var BlogPostActions = BlogPosts.BlogPosts;
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/blogposts', (req, res) => {
    res.json(BlogPostActions.get());
});

router.post('/blogposts', (req, res) => {
    BlogPostActions.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
    res.json(BlogPostActions.get());
});

router.put('/blogpost', (req, res) => {
    BlogPostActions.update(req.body.blogpost);
    res.json(BlogPostActions.get());
});

router.delete('/blogpost/:id', (req, res) => {
    BlogPostActions.delete(req.params.id);
    res.json(BlogPostActions.get());
});

module.exports = router;

//change all the "req, res" to their appropriate names
//singular or pluralization of a word
//


