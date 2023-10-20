import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountryById } from "../../Redux/actions";
import { NavLink, useParams } from "react-router-dom";

function Detail({ country }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { name, continent, capital, subregion, area, population, image, Activities } = country;


    useEffect(() => {
        const detailCountry = async () => {
            try {
                const data = await dispatch(getCountryById(id));
                return data;
            } catch (error) { throw error };
        };
        detailCountry();
    }, [dispatch, id]);

    console.log(Activities)

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
            <div>
                {Activities && Activities.length > 0 ? (
                    <div>
                        <h2>Your activities:</h2>
                        {Activities.map((activity) => {
                            return (
                                <div key={activity.id}>
                                    <ul>
                                        <li>{activity.name}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                ) : <p>No activities for this country yet.
                    <NavLink to='/form'>
                        Create Activity
                    </NavLink>
                    </p>

                }
                <NavLink to={'/home'}>
                    <button>Back</button>
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        country: state.country
    };
};

export default connect(mapStateToProps)(Detail);