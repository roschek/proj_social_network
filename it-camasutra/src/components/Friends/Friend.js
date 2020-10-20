import React from "react";

const Friend = (props) => {
    return (
        <div className="p-2 ">
            <img className="avatar"
                 src={props.ava}
                 alt="avatar"/>
            <p className="avatar__person pt-1">{props.name}</p>
        </div>
    )
}

export default Friend