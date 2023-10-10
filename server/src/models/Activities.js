const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      // String ya que la duración la vamos a solicitar en formato HH:MM
      type: DataTypes.STRING,

      validate: {
        isHours(value) {
          // regex para formato hora
          const regex = /^\d{1,2}:\d{2}$/;
          if (!regex.test(value)){
            throw new Error ('La duración debe tener el formato HH:MM (ejemplo 2:30 o 00:30)')
          }
        }
      }
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: false,
    },
  }, { timestamps: false });
};