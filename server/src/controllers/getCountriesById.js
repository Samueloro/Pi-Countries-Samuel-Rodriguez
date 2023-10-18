const { Country, Activity } = require('../db.js')

async function getCountriesById(req, res) {
    try {
        const { id } = req.params;
        const countrieById = await Country.findByPk(id, {
            include: [{ model: Activity, through: 'Countries_activities' }]
        })

        if (!countrieById) {
            return res.status(404).send("El ID solicitado no se encuentra")
        }

        return res.status(200).json(countrieById)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getCountriesById;