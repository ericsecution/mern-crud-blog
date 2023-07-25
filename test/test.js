// test/test.js

const TestDevData = require("../models/testdevdatas");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./test-dev-server");
chai.should();

chai.use(chaiHttp);

describe("Test Dev Data", () => {
  beforeEach((done) => {
    TestDevData.deleteMany({}, () => {
      done();
    });
  });

  describe("/GET test data", () => {
    it("it should GET all test data", (done) => {
      // create a test data record 
      chai
        .request(app)
        .get("/api/test_dev_data")
        .end((err, res) => {
          if (err) { // Check for errors
            console.error(err);
            done(err); // Calling 'done' to indicate a failed test
          } else {
            
            res.should.have.status(200);
            res.body.data.should.be.a("array");
            res.body.data.length.should.be.eql(0);
            done();
          }
        });
    });
  }); // Close the 'GET' for all test data

  describe("/POST test data", () => {
    it("it should new POST new test data", (done) => {
      let testData = {
        title: "Test Data 100",
        body: "This is 1st Test Data with Eric adding his name into it for a blog post",
        image:
          "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgzMDN8MHwxfGFsbHx8fHx8fHx8fDE2ODk5Nzk1MzN8&ixlib=rb-4.0.3&q=80&w=400",
      };
      chai
        .request(app)
        .post("/api/test_dev_data")
        .send(testData)
        .end((err, res) => {
          if (err) { // Check for errors
            console.error(err);
            done(err); // Calling 'done' to indicate a failed test
          } else {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
          }
        });
    });
  }); // Close the 'POST' for a new (test) Blog post

  describe("/GET/:id test data", () => {
    it("it should GET a test data blog post by the id", (done) => {
      // Step 1) create a test data record, using a POST request
        chai
          .request(app)
          .post("/api/test_dev_data/")
          . send({
            title: "Test Data within the 'GET by id' request",
            body: "This is Eric adding his name into the 'GET by id' request, for good measure",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgzMDN8MHwxfGFsbHx8fHx8fHx8fDE2ODk5Nzk1MzN8&ixlib=rb-4.0.3&q=80&w=400"
          })
          .end((err, res) => {
            // handle error if it exists
            if (err) {
              console.error(err);
              done(err); // Calling 'done' to indicate a failed test
            } else {
              // Use the returned 'id' to test the GET request
              const id = res.body.data._id;
              chai
                .request(app)
                .get("/api/test_dev_data/" + id)
                .end((err, res) => {
                  if (err) {
                  console.error(err);
                  done(err);
                } else {
                  res.should.have.status(200);
                  res.body.data.should.be.a("object");
                  res.body.status.should.be.eql("success");
                  done();
                }
                })
           
            } // close of the 'else' statement using the returned 'id'
          }); // close of the end() callback method
        
     
    }); // close of the 'it' statement
  }); // Close the 'describe()' method and the test to 'GET' a Test Blog Post by 'id'

  describe("/PUT/:id test data", () => {
    it("it should UPDATE a Test Data blog given the id", (done) => {
      // First, create a test data record using POST request
      chai
        .request(app)
        .post("/api/test_dev_data")
        .send({
          title: "Test Data 100",
          body: "This is 1st Test Data with Eric adding his name into it for a blog post",
          image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgzMDN8MHwxfGFsbHx8fHx8fHx8fDE2ODk5Nzk1MzN8&ixlib=rb-4.0.3&q=80&w=400",
        })
        .end((err, res) => {
          if (err) {
            console.error(err);
            done(err);
          } else {
            // Use the returned 'id' to test the PUT request
            const id = res.body.data._id;
            chai
              .request(app)
              .put("/api/test_dev_data/" + id)
              .send({
                title: "The Test Data blog post Title was updated",
                body: "This is an updated Test Data blog post",
                image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgzMDN8MHwxfGFsbHx8fHx8fHx8fDE2ODk5Nzk1MzN8&ixlib=rb-4.0.3&q=80&w=400",
              })
              .end((err, res) => {
                if (err) {
                  console.error(err);
                  done(err);
                } else {
                  res.should.have.status(200);
                  res.body.data.should.be.a("object");
                  res.body.status.should.be.eql("success");
                  done();
                }
              });
          }
        });
    });
  });
  
  describe("/DELETE/:id test data", () => {
    it("it should DELETE a Test Data blog post given the id", (done) => {
      // First, create a test data record using POST request
      chai
        .request(app)
        .post("/api/test_dev_data")
        .send({
          title: "Test Data 100",
          body: "This is 1st Test Data with Eric adding his name into it for a blog post",
          image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzgzMDN8MHwxfGFsbHx8fHx8fHx8fDE2ODk5Nzk1MzN8&ixlib=rb-4.0.3&q=80&w=400",
        })
        .end((err, res) => {
          if (err) {
            console.error(err);
            done(err);
          } else {
            // Use the returned 'id' to test the DELETE request
            const id = res.body.data._id;
            chai
              .request(app)
              .delete("/api/test_dev_data/" + id)
              .end((err, res) => {
                if (err) {
                  console.error(err);
                  done(err);
                } else {
                  res.should.have.status(200);
                  res.body.data.should.be.a("object");
                  res.body.status.should.be.eql("success");
                  done();
                }
              });
          }
        });
    });
  }); // Close the 'DELETE' test

  afterEach((done) => {
    // Close the server after each test to release the port
    app.close(() => {
      done();
    });
  });
}); // Close the entire 'Test Dev Data'
