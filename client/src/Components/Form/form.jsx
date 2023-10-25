import { connect, useDispatch } from "react-redux";
import { getAllCountries, postActivity } from "../../Redux/actions";
import { useState } from "react";
import { validateCountry, validateDuration, validateName, validateSeason } from "./formValidations";
import style from "./form.module.css"

function Form({ allCountries }) {
    const dispatch = useDispatch();

    //estado local para guardar los errores
    const [errors, setErrors] = useState({
        activityName: null,
        duration: null,
        season: null,
        country: null
    })


    //aquí se guardan los paises seleccionados
    //para el usuario
    const [selectedCountries, setSelectedCountries] = useState([]);
    //para el back
    const [selectedCountriesId, setSelectedCountriesId] = useState([]);

    //estado para guardar toda la información del form
    const [information, setInformation] = useState({
        name: "",
        difficulty: Number("1"),
        duration: Number(""),
        season: "",
        country: [],
    })

    //SELECCION Y DESELECCIÓN DE  LOS PAISES 
    const changeCountrySelection = (countryId, index) => {
        if (selectedCountriesId.includes(countryId)) {
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
        const updateCountries = selectedCountries.filter((_, i) => i !== index); // selecciono el indice NO el elemento
        const updateCountriesId = selectedCountriesId.filter((_, i) => i !== index);

        setSelectedCountriesId(updateCountriesId);
        setSelectedCountries(updateCountries);
        setInformation({
            ...information,
            country: updateCountriesId,
        })
    }

    //Guardar los que escribe el usuario
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

        const duration = information.duration;
        const season = information.season;
        const countries = information.country;
        const activityName = information.name;


        const durationError = validateDuration(duration);
        const seasonError = validateSeason(season);
        const countryError = validateCountry(countries);
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
            alert('🎇🎆The activity has been created successfully 🎆🎇');
            setInformation({
                name: "",
                difficulty: "1",
                duration: "",
                season: "--",
                country: [],
            });
        }
    };

    //
    return (
        <div className={style.center}>

            <div className={style.formContainer}>
                <h1>Create your activity</h1>
                <form onSubmit={handleSubmit} className={style.form}>

                    <div>
                        <p style={{ color: '#289AE0' }}>{errors.activityName ? errors.activityName : <br />}</p>
                        <label> Name: </label>
                        <input
                            className={style.name}
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="off"
                            placeholder="Write the activity's name"
                            onChange={handleChange}
                            value={information.name}
                        />
                    </div>

                    <br />
                    <br />

                    <div>
                        <label > Difficulty: </label>
                        <div className={style.radioInput}>
                            <label>
                                <input type="radio" id="1" name="difficulty" value="1" onChange={handleChange} defaultChecked />
                                <span>1</span>
                            </label>
                            <label>
                                <input type="radio" id="2" name="difficulty" value="2" onChange={handleChange} />
                                <span>2</span>
                            </label>
                            <label>
                                <input type="radio" id="3" name="difficulty" value="3" onChange={handleChange} />
                                <span>3</span>
                            </label>
                            <label>
                                <input type="radio" id="4" name="difficulty" value="4" onChange={handleChange} />
                                <span>4</span>
                            </label>
                            <label>
                                <input type="radio" id="5" name="difficulty" value="5" onChange={handleChange} />
                                <span>5</span>
                            </label>
                            <span className={style.selection}></span>
                        </div>
                    </div>

                    <div>
                        <p style={{ color: '#289AE0' }}>{errors.duration ? errors.duration : <br />}</p>
                        <label> Duration (in hours): </label>
                        <input
                            className={style.duration}
                            type="number"
                            id="duration"
                            name="duration"
                            onChange={handleChange}
                            value={information.duration}
                        />
                    </div>

                    <div>
                        <p style={{ color: '#289AE0' }}>{errors.season ? errors.season : <br />}</p>
                        <label> Season: </label>
                        <select
                            className={style.season}
                            onChange={handleChange}
                            name="season"
                            id="season"
                            value={information.season}>
                            <option>--</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <p>You can select multiple countries</p>
                        <label>Country: </label>
                        <select
                            className={style.country}
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
                    <button type="submit" className={style.submit}>Create your Activty</button>
                </form>
                <br />
                    <h4 className={style.titleSelect}>Selected Countries:</h4>
                <div>
                    <p style={{ color: '#289AE0', margin:'0'}}  >{errors.country ? errors.country : <br />}</p>
                    <ul className={style.selectedCountries}>
                        {selectedCountries.map((country, index) => (
                            <li 
                            key={index}
                            className={style.countrySelect}
                            >
                                {country.name}
                                <button className={style.remove} onClick={() => removeCountry(index)}>X</button>
                            </li>
                        ))}
                    </ul>
                </div>
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