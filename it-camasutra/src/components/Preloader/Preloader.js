import React from "react";
import "./Preloader.css"

const Preloader = ()=>{
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Preloader