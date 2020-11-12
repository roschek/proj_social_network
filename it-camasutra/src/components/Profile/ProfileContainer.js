import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus,savePhoto} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";


let AuthRedirectComponent = (props)=>{
    if(!props.isAuth) return <Redirect to={"/login"}/>
 return <ProfileContainer {...props}/>
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
                userId =12114
        }
        this.props.getStatus(userId)

       this.props.getProfile(userId);
      }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let userId = this.props.match.params.userId
    if(!userId){
      this.props.history.push('/login')
    }
    this.props.getStatus(userId)

    this.props.getProfile(userId);
  }

    render(){

        return(
            <Profile
                isOwner={!!this.props.match.params.userId}
                savePhoto ={this.props.savePhoto}
                {...this.props}/>
        )
    }
}
let mapStateToProps=(state)=>({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth,
    status: state.profilePage.status

})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export  default connect(mapStateToProps,{getProfile,getStatus,updateStatus,savePhoto})(WithUrlDataContainerComponent)
