import React from "react";
const Messages = (props) =>{
    return (
        <>
            <li className="p-3 border-bottom"><p>{props.message}</p></li>
        </>
    )
}
export default Messages