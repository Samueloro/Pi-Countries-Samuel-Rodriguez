import { NavLink } from "react-router-dom";
import style from "./landing.module.css"

export default function LandingPage() {

    return (
        <div className={style.landing}>
            <NavLink className={style.start} to={'/home'}>
                <button className={style.bn54}>Start travel</button>
            </NavLink>
            <div className={style.titles}>
                <h1 className={style.title}>¡ Welcome to WorldWanderer !</h1>
                <h3 className={style.created}>Created by:  Samuel Mateo Rodríguez Yopasa</h3>
            </div>
        </div>
    )
}