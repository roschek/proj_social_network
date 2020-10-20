import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    return (
        <>
            <li className="p-3 border-bottom"><NavLink to={"/dialogs/"+props.id} className="h5">{props.name}</NavLink></li>
        </>

    )
}
export default Users