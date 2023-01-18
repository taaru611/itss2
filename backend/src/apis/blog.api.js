const blogApi = require('express').Router();
const blogController = require('../controllers/blog.controller');

blogApi.post(
    '/add-blog',
    blogController.postBlog,
  );

blogApi.get('/blog-list', blogController.getBlogList);

blogApi.get('/blog-html', blogController.getBlogHtml);

module.exports = blogApi;
