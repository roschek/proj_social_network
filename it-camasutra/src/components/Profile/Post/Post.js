import React from "react";
import "./Post.css"
const Post = (props) => {
    return (
        <div className="row m-4 mw-100 ">
            <img className="round-ava"  src="https://pbs.twimg.com/profile_banners/3363109133/1468156343/1500x500" alt="header"/>
            <div className="m-2 mr-5 text-center">{props.message}</div>
            <p className="m-2 text-right">Likes:    {props.likes}</p>
        </div>
    )
}

export default Post