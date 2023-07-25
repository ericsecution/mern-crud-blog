// controllers/TestDevDataController.js

const testDevDataService = require("../services/TestDevDataServices");

exports.getAllTestDevDataPosts = async (req, res) => {
  try {
    const testData = await testDevDataService.getAllTestDevDataPosts();
    res.json({ data: testData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNewTestDevDataPost = async (req, res) => {
  try {
    const testData = await testDevDataService.createNewTestDevDataPost(req.body);
    res.json({ data: testData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTestDevDataPostById = async (req, res) => {
  try {
    const testData = await testDevDataService.getTestDevDataPostById(req.params.id);
    res.json({ data: testData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTestDevDataPostById = async (req, res) => {
  try {
    const testData = await testDevDataService.updateTestDevDataPostById(
      req.params.id,
      req.body
    );
    res.json({ data: testData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTestDevDataPostById = async (req, res) => {
  try {
    const testData = await testDevDataService.deleteTestDevDataPostById(
      req.params.id
    );
    res.json({ data: testData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
