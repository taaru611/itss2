import axiosClient from './axiosClient';

const URL = '/blog';

const blogApi = { 

  postBlog: (title, desc, html, level) => {
    return axiosClient.post(`${URL}/add-blog`, {
      title,
      desc,
      html,
      level,
    });
  },

  getBlogList: () => {
    return axiosClient.get(`${URL}/blog-list`);
  },

  getBlogHtml: (_id) => {
    return axiosClient.get(`${URL}/blog-html`, { params: { _id } });
  },
};

export default blogApi;
