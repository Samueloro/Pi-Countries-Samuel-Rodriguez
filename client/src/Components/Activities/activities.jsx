import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getAllActivities } from "../../Redux/actions";
import CardActivity from "../CardActivity/cardActivity";

function Activities({ allActivities }) {

    const dispatch = useDispatch();

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const data = await dispatch(getAllActivities());
                return(data);
            } catch (error) { throw error };
        };
        loadActivities();
    }, [dispatch]);
    
  

    return (
        <div>
            <h1>Activities</h1>
            {allActivities.map((activity) => {
                return (
                    <CardActivity 
                    key={activity.id}
                    name = {activity.name}
                    difficulty = {activity.difficulty}
                    duration = {activity.duration}
                    season = {activity.season}
                    countries = {activity.Countries}
                    >
                    </CardActivity>
                )
            }
            )}
        </div>

    )
}

const mapStateToProps = state => {

    return {
        allActivities: state.allActivities
    };
};

export default connect(mapStateToProps)(Activities)
