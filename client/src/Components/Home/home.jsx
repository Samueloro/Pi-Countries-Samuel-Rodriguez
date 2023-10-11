import { useDispatch, connect } from "react-redux"
import { getAllCountries } from "../../Redux/actions";
import { useEffect } from "react";
import CardCountry from "../CardCountry/cardCountry";

function Home({ allCountries }) {

    const dispatch = useDispatch();

    // Obtenemos todos los countries apenas se carga la página
    useEffect(() => {
        const loadCountries = async () => {
            try {
                await dispatch(getAllCountries());
            } catch (error) { console.error(error) }
        }
        loadCountries();
    }, [dispatch]);

    //Funciones para cambiar de página
    const handleNext = ()=>{
        console.log('Pa lante')
    }
    const handlePrevius = ()=>{
        console.log('Pa tras')
    }


    return (
        <div>
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePrevius}>Previus</button>
            {
                allCountries.map((country) => {
                    return (
                        <CardCountry
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            image={country.image}
                            continent={country.continent}
                            capital={country.capital}
                            subregion={country.subregion}
                            area={country.area}
                            population={country.population}
                            />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    }
}

export default connect(mapStateToProps)(Home) 