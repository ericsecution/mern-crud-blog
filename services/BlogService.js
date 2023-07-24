// services/BlogService.js

const BlogModel = require("../models/Blog");

exports.getAllBlogPosts = async () => {
    return await BlogModel.find();
};

exports.createNewBlogPost = async (blog) => {
    return await BlogModel.create(blog);
};

exports.getBlogPostById = async (id) => {
    return await BlogModel.findById(id);
};

exports.updateBlogPostById = async (id, blog) => {
    return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.deleteBlogPostById = async (id) => {
    return await BlogModel.findByIdAndDelete(id);
};
