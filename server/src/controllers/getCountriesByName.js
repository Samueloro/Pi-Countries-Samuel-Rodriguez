const { Country } = require('../db.js')

async function getCountriesByName (req, res){
    try {
        const { name } = req.query;
        const nameCountry = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();// para que sea igual al name en el BD(argentina = Argentina)
        const countryByname = await Country.findAll({
            where:{
                name: nameCountry
            }
        })
        return res.status(200).json(countryByname)
    } catch (error) {
        return res.status(400).json({ error: error.message }) 
    }
}

module.exports = getCountriesByName;