import { connect, useDispatch } from "react-redux";
import { getAllCountries, postActivity } from "../../Redux/actions";
import { useState } from "react";
import { validateCountry, validateDuration, validateName, validateSeason } from "./formValidations";

function Form({ allCountries }) {
    const dispatch = useDispatch();

    //estado local para guardar los errores
    const [errors, setErrors] = useState({
        activityName: null,
        duration: null,
        season: null,
        country: null
    })

    const [name, setName] =useState("")
    //aquí se guardan los paises seleccionados
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedCountriesId, setSelectedCountriesId] = useState([]);

    //estado para guardar toda la información del form
    const [information, setInformation] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })

    //SELECCIONAR LOS PAISES 
    const changeCountrySelection = (countryId, index) => {
        if (selectedCountries.includes(countryId)) {
            selectedCountriesId(selectedCountriesId.filter(item => item !== countryId));
            selectedCountries(selectedCountries.filter(item => item !== countryId));
        } else {
            const selectedCountry = allCountries.find(country => country.id === countryId)
            setSelectedCountriesId([...selectedCountriesId, countryId])
            setSelectedCountries([...selectedCountries, selectedCountry]);
        };
        setInformation({
            ...information,
            country: [...selectedCountriesId, countryId]
        })
    };

    // TRAER TODOS LOS PAISES AL SELECT
    const countriesToSelect = async () => {
        try {
            await dispatch(getAllCountries());
        } catch (error) { throw error };
    };

    // REMOVER PAISES DE LA LISTA DE PAISES SELECCIONADOS
    const removeCountry = (index) => {
        const updateCountries = [...selectedCountries];
        updateCountries.splice(index, 1);
        setSelectedCountries(updateCountries);
    }

    //
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInformation({
            ...information,
            [name]: value
        })
    }

    //VALIDACION DE ERRORES
    const handleSubmit = (event) => {
        event.preventDefault();

        const duration = event.target.duration.value;
        const season = event.target.season.value;
        const country = event.target.country.value;
        const activityName = event.target.name.value;

        const durationError = validateDuration(duration);
        const seasonError = validateSeason(season);
        const countryError = validateCountry(country);
        const activityNameError = validateName(activityName);

        setErrors({
            activityName: activityNameError,
            duration: durationError,
            season: seasonError,
            country: countryError
        })

        if (!durationError && !seasonError && !countryError && !activityNameError) {
            dispatch(postActivity(information));
            setSelectedCountries([]);   
            setSelectedCountriesId([]);
            setName("");   
        }
    };

    //
    return (
        <div>
            <p>
                {errors.activityName ? errors.activityName : null}
                <br />
                {errors.duration ? errors.duration : null}
                <br />
                {errors.season ? errors.season : null}
                <br />
                {errors.country ? errors.country : null}
            </p>
            <h1>Time to create your activity</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Write the activity's name"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label> Difficulty: </label>
                    <input type="radio" id="1" name="difficulty" value="1" onChange={handleChange} defaultChecked />
                    <label htmlFor="1">1</label>
                    <input type="radio" id="2" name="difficulty" value="2" onChange={handleChange} />
                    <label htmlFor="2">2</label>
                    <input type="radio" id="3" name="difficulty" value="3" onChange={handleChange} />
                    <label htmlFor="3">3</label>
                    <input type="radio" id="4" name="difficulty" value="4" onChange={handleChange} />
                    <label htmlFor="4">4</label>
                    <input type="radio" id="5" name="difficulty" value="5" onChange={handleChange} />
                    <label htmlFor="5">5</label>
                </div>

                <div>
                    <label> Duration (in hours): </label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        min="0"
                        max="24"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label> Season: </label>
                    <select onChange={handleChange} name="season" id="season">
                        <option>--</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>

                <div>
                    <p>You can select multiple countries</p>
                    <label>Country: </label>
                    <select
                        id="country"
                        name="country"
                        onClick={() => countriesToSelect()}
                        onChange={(e) => changeCountrySelection(e.target.value)}>
                        {allCountries
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((country) => {
                                return (
                                    <option
                                        key={country.id}
                                        value={country.id}>
                                        {country.name}
                                    </option>
                                )
                            })}
                    </select>
                </div>
                <br />
                <button type="submit">Create your Activty</button>
            </form>
            <div>
                <h4>Selected Countries:</h4>
                <ul>
                    {selectedCountries.map((country, index) => (
                        <li key={index}>
                            {country.name}
                            <button onClick={() => removeCountry(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    };
};

export default connect(mapStateToProps)(Form);