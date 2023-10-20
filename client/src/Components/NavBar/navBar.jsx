import { NavLink } from "react-router-dom";

export default function NavBar () {

    return(
        <div style={{display: 'flex', justifyContent:'center'}}>
            <NavLink to={'/home'}>
             <button>Home</button>   
            </NavLink>

            <NavLink to={'/form'}>
            <button>Create Activity</button> 
            </NavLink>

            <NavLink to={'/activities'}>
            <button>My Activities</button> 
            </NavLink>

            <NavLink to={'/'}>
            <button>Out</button>
            </NavLink>

        </div>
    )
}