// controllers/BlogController.js

const blogService = require("../services/BlogService");

exports.getAllBlogPosts = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogPosts();
        res.json({ data: blogs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createNewBlogPost = async (req, res) => {
    try {
        const blog = await blogService.createNewBlogPost(req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBlogPostById = async (req, res) => {
    try {
        const blog = await blogService.getBlogPostById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBlogPostById = async (req, res) => {
    try {
        const blog = await blogService.updateBlogPostById(req.params.id, req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBlogPostById = async (req, res) => {
    try {
        const blog = await blogService.deleteBlogPostById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
