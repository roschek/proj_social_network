import React from "react";
import "./Profile.css"

import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Post/PostsContainer";

const Profile = (props) => {

    return (
        <>
            <img className="rounded w-100 h-25"
                 src="https://pbs.twimg.com/profile_banners/3363109133/1468156343/1500x500" alt="header"/>
            <div className="container col mt-5">
                <ProfileInfo name="Вася Вейдер" age="134 года"/>
                <PostsContainer store={props.store}/>
            </div>
        </>
    )
}

export default Profile