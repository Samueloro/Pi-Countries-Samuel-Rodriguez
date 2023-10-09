const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const { Country } = require('./src/db.js')

//Ruta para obtener todos los paises y guardarlos en la base de datos
const allCountries = async () => {
  try {
    const response = await axios(`http://localhost:5000/countries`)
    // sacar solo la data 
    const countriesData = response.data;
    //map para solo obtener la información deseada 
    const countries = countriesData.map(async (data) => {
      // para no tener el error  string violation 
      const continent = data.continents.join(" ");
      // para no tener el error  string violati y si capital no está definido
      const capital =Array.isArray(data.capital)? data.capital.join(" ") : data.capital || '';
      /*       console.log(capital) */
      //Por si la información de capital o subregión no se encuentra la completa con un guión
      if(!data.capital || !data.subregion) {
        data.capital = "-"
        data.subregion = '-'
      }
      //información del país que se va a almacenar en la DB
      const {cca3, name, flags, subregion, area, population} = data;
      const newCountry = {
        id: cca3,
        name: name.common,
        image: flags.png,
        continent: continent,
        capital: capital,
        subregion: subregion,
        area: area,
        population: population,
      }
      await Country.create(newCountry)
    })
    await Promise.all(countries) //para que todos los paises se inserten 
    console.log('Base de datos cargada')

  } catch (error) {
    console.error('Error al cargar la base de datos:', error)
  }
}


conn.sync({ force: true }).then(async () => {
  await allCountries()
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error.message))


