import React from "react";
import "./Profile.css"
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Post/PostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
if (!props.profile){
    return <Preloader/>
}
    return (
        <>
            <img className="rounded w-100 h-25"
                 src="https://pbs.twimg.com/profile_banners/3363109133/1468156343/1500x500" alt="header"/>
            <div className="container col mt-5">
                <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} name={props.profile.fullName} about={props.profile.aboutMe} avatar={props.profile.photos.small} status={props.status} updateStatus={props.updateStatus}/>
                <PostsContainer store={props.store}/>
            </div>
        </>
    )
}

export default Profile
