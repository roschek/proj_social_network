import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className="container-md m-auto bg-primary p-2">
            <h1 className="text-center text-light">Привет реакт</h1>
            <div className="container ">{ props.isAuth? <NavLink to={'/profile'+ props.id}  className="login text-light font-weight-bold">{props.login}<button className="btn btn-success ml-5" onClick={props.logout}>Logout</button></NavLink>:
                <NavLink className="login text-light font-weight-bold" to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}
export default Header