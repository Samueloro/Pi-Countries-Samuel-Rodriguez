const { Activity } = require('../db.js'); 

async function postActivities (req, res){
    try {
        const {name, difficulty, duration, season, country} = req.body;
        const newActivity = await Activity.create({name, difficulty, duration, season});
        await newActivity.addCountry(country)
        return  res.status(200).json(newActivity);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

module.exports = postActivities;