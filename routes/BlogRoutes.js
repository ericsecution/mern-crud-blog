// routes/BlogRoutes.js

// create routes for the controllers

const express = require("express");
const {
  getAllBlogPosts,
  createNewBlogPost,
  getBlogPostById,
  updateBlogPostById,
  deleteBlogPostById,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogPosts).post(createNewBlogPost);
router.route("/:id").get(getBlogPostById).put(updateBlogPostById).delete(deleteBlogPostById);

module.exports = router;
