const { Activity } = require('../db.js')
const { Country } = require('../db.js')

async function getActivities(req, res) {
    try {
        const allActivities = await Activity.findAll({
            include: Country
        })
        if (allActivities.length === 0) {

            return res.status(400).send('No hay actividades agregadas');
        }
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getActivities