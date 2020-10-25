import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId =12114
        }
       this.props.getProfile(userId)}

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps=(state)=>({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export  default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)