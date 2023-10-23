import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountryById } from "../../Redux/actions";
import { NavLink, useParams } from "react-router-dom";
import style from "./detail.module.css";

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


    return (
        <div className={style.conteiner}>
            <div className={style.detail}>
                <img
                    className={style.flag}
                    src={image}
                    alt={`${name} from ${continent}`}
                />

                <h1
                    className={style.name}>
                    <p
                        style={{ color: '#289AE0' }}>
                        Name:
                    </p>
                    {name}
                </h1>

                <h1
                    className={style.continent}>
                    <p style={{ color: '#289AE0' }}>
                        Continent:
                    </p>
                    {continent}
                </h1>

                {capital === '-' ? null :
                    <h1 className={style.capital}><p style={{ color: '#289AE0' }}>Capital:</p>{capital}</h1>
                }

                {subregion === '-' ? null :
                    <h1 className={style.subregion}><p style={{ color: '#289AE0' }}>Subregion:</p> {subregion}</h1>
                }

                <h1
                    className={style.area}>
                    <p style={{ color: '#289AE0' }}>
                        Area:
                    </p>
                    {area}
                </h1>

                <h1
                    className={style.population}>
                    <p style={{ color: '#289AE0' }}>
                        Population:
                    </p>
                    {population}
                </h1>

                <div>
                    {Activities && Activities.length > 0 ? (
                        <div>
                            <h2 className={style.activities} style={{ color: '#289AE0' }}>Associated Activities:</h2>
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
                    ) : <p className={style.activities}>No activities for this country yet. 
                        <NavLink 
                        className={style.create} 
                        to='/form' >
                             Create Activity
                        </NavLink>
                    </p>

                    }

                </div>
                <div
                    className={style.back}>
                    <NavLink to={'/home'} >
                        <button className={style.button}>Back Home</button>
                    </NavLink>

                </div>
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