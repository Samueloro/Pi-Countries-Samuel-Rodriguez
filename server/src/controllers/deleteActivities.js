const { Op } = require('sequelize');
const { Activity } = require('../db.js');

async function deleteActivities(req, res) {
    try {
        const { id, name } = req.body;
        Activity.destroy({
            where: {
                [Op.and]: [{ id: id }, { name: name }]
            }
        })
        res.status(200).send('La Actividad ha sido borrada')
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = deleteActivities;