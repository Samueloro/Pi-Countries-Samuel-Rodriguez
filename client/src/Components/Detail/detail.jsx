import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountryById } from "../../Redux/actions";
import { useParams } from "react-router-dom";

function Detail({ country }) {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const detailCountry = async () => {
            try {
                await dispatch(getCountryById(id));
            } catch (error) { throw error };
        };
        detailCountry();
    }, [id]);

    return (
        <div>
            <img src={country.image} alt={`${country.name} from ${country.continent}`}/>
            <h1>Name: {country.name}</h1>
            <h1>Continent: {country.continent}</h1>
            <h2>Cappital: {country.capital}</h2>
            <h2>Subregion: {country.subregion}</h2>
            <h2>Area: {country.area}</h2>
            <h2>Population: {country.population}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        country: state.country
    };
};

export default connect(mapStateToProps)(Detail);