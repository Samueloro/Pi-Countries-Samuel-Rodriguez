import { NavLink } from "react-router-dom"
import style from "./cardActivity.module.css"

export default function CardActivity({ onClose, id, name, difficulty, duration, season, countries }) {



    return (
        <div key={id} className={style.activity}>
            <h3 className={style.name}> <p style={{ color: '#289AE0' }}>Name:</p>{name}</h3>
            <h3 className={style.difficulty}><p style={{ color: '#289AE0' }}>Difficulty:</p>{difficulty}</h3>
            <h3 className={style.duration}><p style={{ color: '#289AE0' }}>Duration:</p>{duration} {duration === 1 ? 'hour' : 'hours'}</h3>
            <h3 className={style.season}><p style={{ color: '#289AE0' }}>Season:</p>{season}</h3>
            <div className={style.conteinerF}>
                <div className={style.close}>
                <button onClick={() => onClose(id)} className={style.close}>X</button>
                </div>

                <h3 className={style.countries} style={{ color: '#289AE0' }}>Countries:</h3>
                <ul className={style.list} >
                    {countries.map((country) => {

                        return (
                            <li key={country.id} className={style.li}>
                                <NavLink to={`/detail/${country.id}`}>
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className={style.flags}
                                    />
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}