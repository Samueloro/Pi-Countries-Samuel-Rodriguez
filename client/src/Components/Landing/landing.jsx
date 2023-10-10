import { NavLink } from "react-router-dom";

export default function LandingPage(){

    return(
        <div>
            <NavLink to={'/home'} style={{display: 'flex', justifyContent:'center'}}>
            <button>Start</button> 
            </NavLink>
            <h1>Este es el Landing re xd papá</h1>
            <h3>Created by Samuel Mateo Rodríguez Yopasa</h3>
        </div>
    )
}