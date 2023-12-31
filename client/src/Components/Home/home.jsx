import { useDispatch, connect } from "react-redux"
import { filterByActivity, filterByContinent, filterByPopulation, getAllCountries, orderBYName } from "../../Redux/actions";
import { useEffect, useState } from "react";
import CardCountry from "../CardCountry/cardCountry";
import SearchBar from "../SearchBar/searchBar";
import style from './home.module.css'

function Home({ filteredCountries }) {

    const itemsPerPage = 10;
    //la página a iniciar es 0
    //Estados para realizar el paginado 
    const [currentPage, setCurrentPage] = useState(0);

    const dispatch = useDispatch();

    // Obtenemos todos los countries apenas se carga la página
    useEffect(() => {
        const loadCountries = async () => {
            try {
                await dispatch(getAllCountries());
            } catch (error) { console.error(error) };
        };
        loadCountries();
    }, [dispatch]);

    //Funciones para cambiar de página
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };
    const handlePrevius = () => {
        setCurrentPage(currentPage - 1);
    };
    //filtrar los paises a mostrar en cada página
    const startIndex = currentPage * itemsPerPage;  // indice del primer pais a mostrar por página // 
    const endIndex = startIndex + itemsPerPage; // indice del ultimo país a mostrar por página // 
    
    //los paises que se  van a mostrar
    const countriesFilteredToShow = filteredCountries.slice(startIndex, endIndex);

    //MOSTRAR PAGINADO
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage) // 
    const firstItem = startIndex + 1;
    const lastItem = Math.min(endIndex, filteredCountries.length)


    //ORDENAR POR ALFABETO
    const handleOrder = (event) => {
        dispatch(orderBYName(event.target.value));
    };

    //FILTRAR POR CONTINENTE
    const handleContinent = (event) => {
        dispatch(filterByContinent(event.target.value));
        setCurrentPage(0)
    };

    //FILTRAR POR POBLACIÓN
    const handlePopulation = (event) => {
        dispatch(filterByPopulation(event.target.value));
    };

    //FILTRAR POR ACTIVIDAD
    const handleActivity = (event) => {
        dispatch(filterByActivity(event.target.value));
        setCurrentPage(0)
    };

    return (
        <div>
            < SearchBar />
            <div className={style.filters}>
                Continent
                <select name="filter continent" id="filter continent" onChange={handleContinent}>
                    <option value={"All"}>All</option>
                    <option value={"Africa"}>Africa</option>
                    <option value={"Antarctica"}>Antarctica</option>
                    <option value={"Asia"}>Asia</option>
                    <option value={"Europe"}>Europe</option>
                    <option value={"North America"}>North America</option>
                    <option value={"Oceania"}>Oceania</option>
                    <option value={"South America"}>South America</option>
                </select>

                Order
                <select name="orderName" id="orderName" onChange={handleOrder}>
                    <option value={"All"}>Select</option>
                    <option value={"A"}>A-Z</option>
                    <option value={"Z"}>Z-A</option>
                </select>

                Population
                <select name="orderPopulation" id="orderPopulation" onChange={handlePopulation}>
                    <option value={"All"}>Select</option>
                    <option value={"smaller"}>Smaller population</option>
                    <option value={"higher"}>Higher population</option>
                </select>

                Activities
                <select name="orderAct" id="orderAct" onChange={handleActivity}>
                    <option value={"All"}>Select</option>
                    <option value={"Without"}>Without Activities</option>
                    <option value={"Has"}>Has Activities</option>
                </select>
            </div>

            <br />
            <div className={style.cards}>
                {
                    countriesFilteredToShow.map((country) => {
                        return (
                            <CardCountry
                                key={country.id}
                                id={country.id}
                                name={country.name}
                                image={country.image}
                                continent={country.continent}
                            />
                        )
                    })

                }
            </div>
            <div className={style.previus}>
                {/* Se agrega la propiedad disabled para que se desabilite si no hay paises en el next o en el previus */}
                <button onClick={handlePrevius} disabled={currentPage === 0} className={style.button}>Previus Page</button>
            </div>
            <span className={style.pages}>
                Page {currentPage + 1} of {totalPages} | Showing {firstItem} - {lastItem}  of  {filteredCountries.length} countries
            </span>
            <div className={style.next}>
                <button onClick={handleNext} disabled={endIndex >= filteredCountries.length} className={style.button}>Next Page</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries,
        filteredCountries: state.filteredCountries,

    };
};

export default connect(mapStateToProps)(Home); 