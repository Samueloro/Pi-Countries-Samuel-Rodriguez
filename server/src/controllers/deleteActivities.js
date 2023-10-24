const { Activity } = require('../db.js');

async function deleteActivities(req, res) {
    try {
        const { id } = req.params;
        await Activity.destroy({
            where: { id: id }
        })
        res.status(200).send(id)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = deleteActivities;