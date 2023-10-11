import { useDispatch, connect } from "react-redux"
import { getAllCountries } from "../../Redux/actions";

function Home() {

    const dispatch = useDispatch();

    const allCountries = async () => {
        try {
            const data = await dispatch(getAllCountries());
            console.log(data)
        } catch (error) { console.error(error) }
    }

    return (
        <div>
            <button onClick={allCountries}>Cargar paises</button>
            <h1>Este es el Home re loco mi perro</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCountries: state.allCountries
    }
}

export default connect(mapStateToProps)(Home) 