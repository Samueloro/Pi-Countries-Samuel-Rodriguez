import { NavLink } from 'react-router-dom'

export default function CardCountry({id, name, image, continent }) {

    return (
        <div>
            <NavLink to={`/detail/${id}`}>
                <h2>Country: {name}</h2>
            </NavLink>

            <h2>From: {continent}</h2>

            <NavLink to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </NavLink>

        </div>
    )
}