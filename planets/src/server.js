const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets", require("./routes"));

server.use("*", (req, res) => {
    res.status(404).send("not found");
});

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
});

module.exports = server;