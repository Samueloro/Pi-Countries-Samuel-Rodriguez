import { NavLink } from "react-router-dom";

export default function NavBar () {

    return(
        <div style={{display: 'flex', justifyContent:'center'}}>
            <NavLink to={'/home'}>
             <button>Home</button>   
            </NavLink>

            <NavLink to={'/form'}>
            <button>Form</button> 
            </NavLink>

            <NavLink to={'/'}>
            <button>Out</button>
            </NavLink>

        </div>
    )
}