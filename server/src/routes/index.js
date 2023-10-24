const { Router } = require("express");
const getAllCountries = require('../controllers/getAllCountries')
const getCountriesByName = require('../controllers/getCountriesByName')
const getCountriesById = require('../controllers/getCountriesById')
const postActivities = require('../controllers/postActivities');
const getActivities = require("../controllers/getActivities");
const deleteActivities = require("../controllers/deleteActivities");


const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/name", getCountriesByName);
router.get("/countries/:id", getCountriesById);
router.post("/activities", postActivities);
router.get("/activities", getActivities);
router.delete("/activities/:id", deleteActivities);


module.exports = router;
