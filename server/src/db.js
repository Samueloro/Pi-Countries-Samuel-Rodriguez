require("dotenv").config();
const { Sequelize } = require("sequelize");

//* CARGA DE MODELOS
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
//*

//?CONFIGURACIÓN CONEXIÓN  A BASE DE DATOS
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
  native: false,
});
//?

//* CARGA DE MODELOS
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) // Los archivos que cumplen ciertos criterios (no empiezan con un punto, no son el archivo actual y tienen extensión .js)
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));// se están requiriendo y agregando al array 'modelDefiners'.
  });
//*

//* CARGA DE MODELOS EN SEQUALIZE
modelDefiners.forEach(model => model(sequelize));
//*

//Cambia el nombre para que la primera letra esté en mayuscula, 'countries' = 'Countries';
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;
/* console.log(sequelize.models) */
// Aca las relaciones
Country.belongsToMany(Activity, {
  through: 'Countries_activities',
  timestamps: false
});
Activity.belongsToMany(Country, {
  through: 'Countries_activities',
  timestamps: false,
});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};