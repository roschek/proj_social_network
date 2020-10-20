import React from "react";
import {connect} from "react-redux";
import AddMessage from "./AddMessage";
import {addMessageCreator, updateMessText} from "../../../Redux/dialogsReducer";


let mapStateToProps = (state)=>{
    return(
        {
            value:state.dialogsPage.newMessage,
            dialogsPage:state.dialogsPage
            }
    )
}
let mapDispatchToProps = (dispatch) =>{
    return(
        {
            addPost:()=>{dispatch(addMessageCreator())},
            updatePost:(text)=>{dispatch(updateMessText(text));}
        }
    )
}
const AddMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AddMessage)

export default AddMessageContainer