const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const getAllCountries = require("./controllers/getAllCountries");
const getCountriesById = require("./controllers/getCountriesById");
const getCountriesByName = require("./controllers/getCountriesByName");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);
server.get("/countries", getCountriesByName);
server.get("/countries", getAllCountries);
server.get("/countries/:id", getCountriesById);

module.exports = server;
