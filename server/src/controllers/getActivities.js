const { Activity } =  require('../db.js')

async function getActivities (req, res){
    try {
        const allActivities = await Activity.findAll()
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports =  getActivities