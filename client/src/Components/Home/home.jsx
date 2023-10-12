import { useDispatch, connect } from "react-redux"
import { getAllCountries } from "../../Redux/actions";
import { useEffect, useState } from "react";
import CardCountry from "../CardCountry/cardCountry";
import SearchBar from "../SearchBar/searchBar";

function Home({ allCountries }) {

    const itemsPerPage = 10;
    //la página a iniciar es 0
    const [currentPage, setCurrentPage] = useState(0)

    const dispatch = useDispatch();
    //Estados para realizar el paginado 


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
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }
    const handlePrevius = () => {
        setCurrentPage(currentPage - 1)
    }
    //filtrar los paises a mostrar en cada página
    const startIndex = currentPage * itemsPerPage;  // indice del primer pais a mostrar por página
    const endIndex = startIndex + itemsPerPage; // indice del ultimo país a mostrar por página
    //los paises que se  van a mostrar
    const countriesToShow = allCountries.slice(startIndex, endIndex) // se muestran los paises por ejemplo del  (0 al 9)(1 al 10)


    return (
        <div>
            <SearchBar/>
            {/* Se agrega la propiedad disabled para que se desabilite si no hay paises en el next o en el previus */}
            <button onClick={handlePrevius} disabled={currentPage === 0}>Previus Page</button>
            <button onClick={handleNext} disabled={endIndex >= allCountries.length}>Next Page</button> 
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
    )
}

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    }
}

export default connect(mapStateToProps)(Home) 