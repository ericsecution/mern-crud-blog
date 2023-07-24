// app.js
require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");

// Middleware to parse request data
app.use(express.json());

console.log(process.env.TEMP_VARIABLE);
// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mern-crud-blog", {
    // .connect("mongodb+srv://<myusername>:<mypassword>@learnmern2earn.uptbe18.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

//  Adding in a shutdown handler, to ensure the MongoDB Atlas 
//  cluster's connection is severed when the app is terminated.
    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("MongoDB connection closed through app termination");
        process.exit(0);
      });
    });