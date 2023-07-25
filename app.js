// app.js
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const blogRouter = require("./routes/BlogRoutes");
const testBlogRouter = require("./routes/TestDevDataRoutes");

// Middleware to parse request data
app.use(express.json());

const atlasUser = process.env.USER_NAME;
const atlasPass = process.env.PASS_WORD;

// MongoDB Connection
mongoose
  .connect(`mongodb+srv://${atlasUser}:${atlasPass}@learnmern2earn.uptbe18.mongodb.net/?retryWrites=true&w=majority`, {

    useNewUrlParser: true, // <== needed to ensure compatability in MongoDB for connection strings
    useUnifiedTopology: true, // <== enables MongoDB's unified topology engine drivers to monitor multiple servers
    dbName: "tests_dev_data", // <== separated the actual app data & logic from the test data & logic
    useFindAndModify: false // <== needed to clear a deprecation warning on the tests
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/blogs", blogRouter);
app.use("/api/test_dev_data", testBlogRouter);

// export the 'app' object
module.exports = app;

/*
  Deprecation Warning, referenced above:
      " DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` 
        without the `useFindAndModify` option set to false are deprecated. 
        See: https://mongoosejs.com/docs/5.x/docs/deprecations.html#findandmodify "

  The Fix:
        I set the 'useFindAndModify' to 'false' which tells Mongoose to use the
        new MongoDB driver functions: 'findOneAndUpdate()' and 'findOneAndDelete()'
        instead of the deprecated methods.
*/