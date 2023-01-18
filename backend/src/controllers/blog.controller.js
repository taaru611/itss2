const { isExistSentence } = require('../services/common.service');
const {
  createBlog,
  getBlogListService,
  getBlogHtmlService,
} = require('../services/blog.service');

exports.postBlog = async (req, res, next) => {
  try {
    const { title, desc, html, level } = req.body;

    // const isExist = await isExistSentence(title);

    // if (isExist) {
    //   return res
    //     .status(409)
    //     .json({ message: 'Ngữ pháp đã tồn tại. Vui lòng thêm khác.' });
    // }

    const isCreated = await createBlog(title, desc, html, level);

    if (isCreated) {
      return res.status(200).json({ message: 'success' });
    }

    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  } catch (error) {
    console.error('POST CONTRIBUTE SENTENCE ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getBlogList = async (req, res, next) => {
  try {
    const blogList = await getBlogListService();
    return res.status(200).json({ blogList });
  } catch (error) {
    console.error('GET BLOG LIST ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};

exports.getBlogHtml = async (req, res, next) => {
  try {
    const { _id } = req.query;
    if (!Boolean(_id)) {
      return res.status(400).json({ message: 'id không hợp lệ' });
    }

    const blogHtml = await getBlogHtmlService(_id);
    return res.status(200).json({ blogHtml });
  } catch (error) {
    console.error(' ERROR: ', error);
    return res.status(500).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};
