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
This is a MERN CRUD Blog template application, 
created by Eric Mangin, for you... and also for me.
    ╔═══════════════════════════════════════════════╗
    ║              The ⇨M⇨E⇧R⇩N⇦ Stack              ║
    ╚═══════════════════════════════════════════════╝
This app follows the typical structure of an Express.js application, with a few
minor tweaks. It establishes a connection with a MongoDB database via Node.js, 
using Mongoose, and defines routes for standard blog posts and test data blog posts. 

The standard blog post routes are mounted under '/api/blogs', and the test data 
blog post routes are mounted under '/api/test_dev_data'. When the server is started, 
it listens on port 3001 (or the port specified in the environment variables).

    ╔═══════════════════════════════════════════════╗
    ║                 The Backend                   ║
    ╚═══════════════════════════════════════════════╝
The backend server handles CRUD (Create, Read, Update, Delete) operations 
for both regular / "standard" blog posts and test-data / dev blog posts. 

The routes defined in the standard blog post, 'blogRouter', and the testable blog posts, 
'testBlogRouter' specify endpoints handled by their respective '/controllers' functions.

    ╔═══════════════════════════════════════════════╗
    ║                The Front-end                  ║
    ╚═══════════════════════════════════════════════╝
The front-end components (built using React) can interact with the backend
server via API calls to (C)reate, (R)ead, (U)pdate, and (D)elete blog posts. 

The React components will be responsible for rendering the user interface and 
making the appropriate API requests to perform these operations on the backend server.


    ┌─────────────────┐
    │    Misc Notes   │
    └─────────────────┘
  Deprecation Warning, referenced above:
      " DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` 
        without the `useFindAndModify` option set to false are deprecated. 
        See: https://mongoosejs.com/docs/5.x/docs/deprecations.html#findandmodify "

  The Fix:
        I set the 'useFindAndModify' to 'false' which tells Mongoose to use the
        new MongoDB driver functions: 'findOneAndUpdate()' and 'findOneAndDelete()'
        instead of the deprecated methods.

  The only things you have to do is fork it over to your own GitHub repo, git clone
  it onto your machine, into whatever folder you want (ideally in one you've already
  opened within VSCode), and then (following the instructions in the README), go and
  create an account over at MongoDB Atlas, and create a (free option available)
  database 'cluster', that's hosted for you (again, for free) by MongoDB. Well, that,
  and don't forget to install the necessary packages (also in the README).

  If you have any questions, or hit a snag, hit me up. I know this app all too well
  at this point, and I'm sure we can figure it out if you get stuck or there's some
  update that's jamming things up. No worries.
*/