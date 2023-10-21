import { NavLink } from 'react-router-dom'
import style from './cardCountry.module.css'

export default function CardCountry({ id, name, image, continent }) {

    return (
        <div className={style.card}>
            <div className={style.center}>
                <div className={style.cardDetails}>
                    <NavLink to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
                        <h2 className={style.textTitle}>{name}</h2>
                    </NavLink>

                    <NavLink to={`/detail/${id}`}>
                        {<img src={image} alt={name} className={style.image} />}
                    </NavLink>

                    <h2 className={style.textBody}>From: {continent}</h2>
                </div>

                <NavLink to={`/detail/${id}`}>
                    <button className={style.cardButton}>More Info</button>
                </NavLink>

            </div>

        </div>
    )
}