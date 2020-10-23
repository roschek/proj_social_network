import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../Redux/authReducer";
import {withRouter} from "react-router-dom";
import {authUser} from "../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authUser()
            .then(res => {
                if(res.data.resultCode ===0){
                    let {id, login, email} = res.data.data
                    this.props.setUserDataAC(id,email,login)
                }

            })
            .catch(err => console.log(err))
    }


    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth,
    login: state.auth.login,
    id:state.auth.userId


})

let WithUrlHeaderContainer = withRouter(HeaderContainer)
export default connect(mapStateToProps,{setUserDataAC})(WithUrlHeaderContainer)