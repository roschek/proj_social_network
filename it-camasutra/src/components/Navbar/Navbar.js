import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css"
import Friends from "../Friends/Friends";


const Navbar = (props) => {
    return (
        <nav className="col-3 rounded bg-success  pb-5 pt-2 ml-0 row  b">
            <ul className="list-unstyled font-weight-bold text-light h2">
                <li className="p-2"><NavLink to="/profile12114" className="text-decoration-none text-light">Profile</NavLink>
                </li>
                <li className="p-2"><NavLink to="/dialogs" className="text-decoration-none text-light">Dialogs</NavLink>
                </li>
                <li className="p-2"><NavLink to="/news" className="text-decoration-none text-light">News</NavLink></li>
                <li className="p-2"><NavLink to="/music" className="text-decoration-none text-light">Music</NavLink>
                </li>
                <li className="p-2 pt-4"><NavLink to="search_users"
                                                  className="text-decoration-none text-light">Search users</NavLink></li>
            </ul>
            <Friends friends={props.friends}/>
        </nav>
    )
}

export default Navbar
