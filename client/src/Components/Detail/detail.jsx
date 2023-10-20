import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountryById } from "../../Redux/actions";
import { useParams } from "react-router-dom";

function Detail({ country }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { name, continent, capital, subregion, area, population, image} = country;

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
            <img src={image} alt={`${name} from ${continent}`} />
            <h1>Name: {name}</h1>
            <h1>Continent: {continent}</h1>
            {capital === '-' ? null :
                <h2>Capital: {capital}</h2>
            }
            {subregion === '-' ? null :
                <h2>Subregion: {subregion}</h2>
            }
            <h2>Area: {area}</h2>
            <h2>Population: {population}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        country: state.country
    };
};

export default connect(mapStateToProps)(Detail);