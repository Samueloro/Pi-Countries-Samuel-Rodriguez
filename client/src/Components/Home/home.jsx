import { useDispatch, connect } from "react-redux"
import { getAllCountries, orderBYName } from "../../Redux/actions";
import { useEffect, useState } from "react";
import CardCountry from "../CardCountry/cardCountry";
import SearchBar from "../SearchBar/searchBar";

function Home({ allCountries }) {

    const itemsPerPage = 10;
    //la página a iniciar es 0
    //Estados para realizar el paginado 
    const [currentPage, setCurrentPage] = useState(0);

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    
    //ORDENAR POR ALFABETO
    const handleOrder = (event) => {
        dispatch(orderBYName(event.target.value));
        aux ? setAux(false) : setAux(true);
    };

    // Obtenemos todos los countries apenas se carga la página
    useEffect(() => {
        const loadCountries = async () => {
            try {
                await dispatch(getAllCountries());
            } catch (error) { throw error };
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
    const startIndex = currentPage * itemsPerPage;  // indice del primer pais a mostrar por página
    const endIndex = startIndex + itemsPerPage; // indice del ultimo país a mostrar por página
    //los paises que se  van a mostrar
    const countriesToShow = allCountries.slice(startIndex, endIndex); // se muestran los paises por ejemplo del  (0 al 9)(1 al 10)


    return (
        <div>
            <SearchBar />
            {/* Se agrega la propiedad disabled para que se desabilite si no hay paises en el next o en el previus */}
            <button onClick={handlePrevius} disabled={currentPage === 0}>Previus Page</button>
            <button onClick={handleNext} disabled={endIndex >= allCountries.length}>Next Page</button>
            <select name="order" id="order" onChange={handleOrder}>
                <option value={"A"}>A-Z</option>
                <option value={"Z"}>Z-A</option>
            </select>
            {
                countriesToShow.map((country) => {
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
    );
};

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    };
};

export default connect(mapStateToProps)(Home); 