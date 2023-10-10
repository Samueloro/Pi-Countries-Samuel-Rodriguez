const { Activity } = require('../db.js'); 

async function postActivities (req, res){
    try {
        const {name, difficulty, duration, season} = req.body;
        const newActivity = await Activity.create({name, difficulty, duration, season});
        return  res.status(200).json(newActivity);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

module.exports = postActivities;