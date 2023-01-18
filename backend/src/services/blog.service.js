const BlogModel = require('../models/blog.model');

exports.getBlogListService = async () => {
  try {
    const blogs = await BlogModel.find({}).select('-html');
    return blogs;
  } catch (error) {
    throw error;
  }
};

exports.getBlogHtmlService = async (_id) => {
  try {
    if (!Boolean(_id)) return null;
    const { html = '' } = await BlogModel.findById(_id).select('-_id html');
    return html;
  } catch (error) {}
};

exports.createBlog = async (title, desc, html, level) => {
  try {
    const result = BlogModel.create({ title, desc, html, level });
    if (result) return true;
    return false;
  } catch (error) {
    throw error;
  }
};
