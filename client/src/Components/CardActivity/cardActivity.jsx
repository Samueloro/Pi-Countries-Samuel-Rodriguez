import { NavLink } from "react-router-dom"

export default function CardActivity({ name, difficulty, duration, season, countries }) {

    const id = countries.map(country => country.id);

    return (
        <div key={id}>
            <h3>Name: {name}</h3>
            <h3>Difficulty: {difficulty}</h3>
            <h3>Duration: {duration} {duration === 1 ? 'hour' : 'hours'}</h3>
            <h3>Season: {season}</h3>
            <h3>Countries:</h3>
            <ul>
                {countries.map((country) => {

                    return (
                        <li key={country.id}>
                            <NavLink to={`/detail/${country.id}`}>
                                <p>{country.name}</p>
                                <img src={country.image} alt={country.name} />
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}