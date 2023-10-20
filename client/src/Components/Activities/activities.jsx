import { useEffect } from "react"
import { useDispatch, connect } from "react-redux"
import { getAllActivities } from "../../Redux/actions";

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
            <h1>Activity</h1>
            {allActivities.map((activity) => {
                return (
                    <div key={activity.id}>
                        <h3>Name: {activity.name}</h3>
                        <h3>Difficulty: {activity.difficulty}</h3>
                        <h3>Duration: {activity.duration}</h3>
                        <h3>Season: {activity.season}</h3>
                        <ul>
                            {activity.Countries.map((country) => {
                                return (
                                    <li key={country.id}>
                                        <h3>Countries</h3>
                                        <p>{country.name}</p>
                                        <img src={country.image} alt={country.name} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
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
