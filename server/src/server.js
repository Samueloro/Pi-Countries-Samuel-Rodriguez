const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const getAllCountries = require("./controllers/getAllCountries");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);
server.get("/countries", getAllCountries);

module.exports = server;
