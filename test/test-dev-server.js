// test-dev-server.js
const app = require('../app');

const port = 3002;
const server = app.listen(port, () => {
    console.log(`The Test Server is running on port ${port}.`);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log("\nTest Server is closed.");
        process.exit(0);
    });
});

module.exports = server;