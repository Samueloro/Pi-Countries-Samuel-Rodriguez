import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getAllActivities } from "../../Redux/actions";
import CardActivity from "../CardActivity/cardActivity";
import { NavLink } from "react-router-dom";

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
        <div>
            {
                allActivities.length === 0
                    ? <div>
                        <h3>There are not added Activities yet.</h3>
                        <NavLink to={'/form'}>
                        <p>Add Activity</p>
                        </NavLink>
                    </div>
                    :
                    allActivities.map((activity) => {
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
                    })
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
