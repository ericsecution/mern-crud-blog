// routes/TestDevDataRoutes.js

const express = require('express');

const {
    getAllTestDevDataPosts,
    createNewTestDevDataPost,
    getTestDevDataPostById,
    updateTestDevDataPostById,
    deleteTestDevDataPostById
} = require('../controllers/TestDevDataController');

const router = express.Router();

router.route("/").get(getAllTestDevDataPosts).post(createNewTestDevDataPost);
router.route("/:id").get(getTestDevDataPostById).put(updateTestDevDataPostById).delete(deleteTestDevDataPostById);



module.exports = router;

