const { Sequelize } = require('sequelize');
const { Country } = require('../db.js')

async function getCountriesByName (req, res){
    try {
        const { name } = req.query;
        const nameCountry = name.toLowerCase();
        const countryByname = await Country.findAll({//[]
            //Busqueda literal insencible a mayusculas
            where: Sequelize.literal(`LOWER(name) LIKE '%${nameCountry}%'`)
        })
        if(countryByname.length === 0){
            return res.status(404).send('No hay coincidencias para la busqueda') 
        }
        return res.status(200).json(countryByname)
    } catch (error) {
        return res.status(400).json({ error: error.message }) 
    }
}

module.exports = getCountriesByName;