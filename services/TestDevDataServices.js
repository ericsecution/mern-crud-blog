// services/TestDevDataServices.js

const TestDevDataModel = require("../models/testdevdatas");

exports.getAllTestDevDataPosts = async () => {
  return await TestDevDataModel.find();
};

exports.createNewTestDevDataPost = async (testData) => {
  return await TestDevDataModel.create(testData);
};

exports.getTestDevDataPostById = async (id) => {
  return await TestDevDataModel.findById(id);
};

exports.updateTestDevDataPostById = async (id, testData) => {
  return await TestDevDataModel.findByIdAndUpdate(id, testData);
};

exports.deleteTestDevDataPostById = async (id) => {
  return await TestDevDataModel.findByIdAndDelete(id);
};
