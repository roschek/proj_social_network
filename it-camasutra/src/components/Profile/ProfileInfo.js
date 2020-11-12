import React from "react";
import ProfileStatus from "./ProfileStatus";
import ava from '../../assets/images/moe-lico-kogda_214679476_orig_.png'

const ProfileInfo = (props) => {

  const changeAvatar = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
      <div className="row mb-5">
        <img className="round col-2 pl-1 pr-1"
             src={props.avatar || ava} alt="avatar"/>
        {props.isOwner && <input className="col-2 ml-4" type={"file"} onChange={changeAvatar}/>}
        <div className="mt-5 w-100 col-8">
          <h2 className="ml-5 text-left">{props.name}</h2>
          <p className="text-left ml-5 mt-3 h5">{props.about}</p>
          <div className="container">
          <p className="font-weight-bold">Looking for a job: Yes</p>
          </div>
          <div className="container">
          <p className="font-weight-bold">My skills: HTML,CSS, JS, Vue JS, React, Webpack </p>
          </div>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
  )

}

export default ProfileInfo
