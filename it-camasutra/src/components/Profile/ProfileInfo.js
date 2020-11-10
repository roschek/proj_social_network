import React from "react";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) =>{
    return(
        <div className="row mb-5">
            <img  className="round col-4 pl-1 pr-1"
                  src={props.avatar} alt="avatar"/>
           <div className="mt-5 w-100 col-8">
            <h2 className="ml-5 text-left">{props.name}</h2>
            <p className="text-left ml-5 mt-3 h5">{props.about}</p>
               <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
           </div>
        </div>
    )

}

export default  ProfileInfo