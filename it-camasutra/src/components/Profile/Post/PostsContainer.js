import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return(
        {
            value:state.profilePage.newPostText,
            profilePage:state.profilePage,

        }
    )
}
let mapDispatchToProps = (dispatch) =>{
    return(
        {
            addPost:()=>{dispatch(addPostActionCreator())},
            updatePost:(text)=>{dispatch(updatePostActionCreator(text))}
        }
    )
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)
export default PostsContainer