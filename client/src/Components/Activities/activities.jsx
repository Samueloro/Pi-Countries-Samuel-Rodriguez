import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getAllActivities } from "../../Redux/actions";
import CardActivity from "../CardActivity/cardActivity";
import { NavLink } from "react-router-dom";
import style from "./activities.module.css";


function Activities({ allActivities }) {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const data = await dispatch(getAllActivities());
                return (data);
            } catch (error) {
                console.error("Error cargando actividades: ", error)
            };
        };
        loadActivities();
    }, [dispatch]);


    return (
        <div className={style.activities}>
            {
                allActivities.length === 0
                    ? <div className={style.conteiner}>
                        <h1>There are not added Activities yet.</h1>
                        <NavLink to={'/form'} className={style.add}>
                            <h2 className={style.addTitle}>Add Activity</h2>
                        </NavLink>
                    </div>
                    : <div className={style.all}>
                    {allActivities.map((activity) => {
                        return (
                        <CardActivity
                            key={activity.id}
                            name={activity.name}
                            difficulty={activity.difficulty}
                            duration={activity.duration}
                            season={activity.season}
                            countries={activity.Countries}
                        >
                        </CardActivity>
                        )
                    })}
                    </div>
            }
        </div>

    )
}

const mapStateToProps = state => {

    return {
        allActivities: state.allActivities
    };
};

export default connect(mapStateToProps)(Activities)
