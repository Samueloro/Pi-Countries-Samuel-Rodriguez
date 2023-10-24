const { Activity } = require('../db.js')
const { Country } = require('../db.js')

async function getActivities(req, res) {
    try {
        const allActivities = await Activity.findAll({
            include: Country
        })
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getActivities