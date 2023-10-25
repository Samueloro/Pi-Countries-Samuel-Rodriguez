




const activities = [
    { name: 'Rafting', difficulty: 4, duration: 3, season: 'Summer', country: ["NZL", "ECU", "NPL"] },
    { name: 'Trekking', difficulty: 2, duration: 6, season: 'Autumn', country: ["CHL", "CAN", "NPL", "PER"] },
    { name: 'Bungee Jumping', difficulty: 5, duration: 1, season: 'Spring', country: ["ZWE", "ZMB", "NPL"] },
    { name: 'Hang-gliding', difficulty: 1, duration: 2, season: 'Winter', country: ["COL", "ECU", "NPL", "ARG"] },
]
const allActivities = await Activity.bulkCreate(activities);