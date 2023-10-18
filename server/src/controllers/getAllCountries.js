const { Country, Activity } = require('../db.js')

async function getAllCountries(req, res) {
    try {
        const countries = await Country.findAll({
            include: [{ model: Activity, through: 'Countries_activities' }]
        })
        return res.status(200).json(countries)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
module.exports = getAllCountries;