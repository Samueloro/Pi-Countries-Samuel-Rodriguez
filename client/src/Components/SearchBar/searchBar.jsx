import { useState } from "react";
import { connect } from "react-redux";
import { searchByname } from "../../Redux/actions"


function SearchBar({ searchByname }) {

    //estados para manejar la busqueda por nombre 
    const [searchCountry, setSearchCountry] = useState('');

    const handleSearch =async (event) => {
        try {
            const value = event.target.value;
            setSearchCountry(value); //seteamos el valor de buscar con el valor ingresado
            await searchByname(value);// ejecutamos la acción de redux con el valor escrito
        } catch (error) {}
    }

    return (
        <div>
            <input value={searchCountry} onChange={handleSearch} type="search" placeholder="Search Country" />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        searchByname: (searchCountry) => dispatch(searchByname(searchCountry))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)