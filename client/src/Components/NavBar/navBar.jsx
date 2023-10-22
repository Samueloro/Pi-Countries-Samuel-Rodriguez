import { NavLink } from "react-router-dom";
import style from "./navBar.module.css"

export default function NavBar () {

    return(
        <div className={style.navContainer}>
            <NavLink to={'/home'}>
             <button className={style.button}>Home</button>   
            </NavLink>

            <NavLink to={'/form'}>
            <button className={style.button} >Create Activity</button> 
            </NavLink>

            <NavLink to={'/activities'}>
            <button className={style.button} >My Activities</button> 
            </NavLink>

            <NavLink to={'/'}>
            <button className={style.button} >Out</button>
            </NavLink>

        </div>
    )
}