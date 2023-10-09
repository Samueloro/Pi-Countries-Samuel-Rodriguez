const { Country } = require('../db.js')

async function getAllCountries (req,res){
    try {
        const countries = await Country.findAll()
        return res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = getAllCountries;