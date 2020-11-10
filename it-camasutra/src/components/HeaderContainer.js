import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUserThunk, logout} from "../Redux/authReducer";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component{
    componentDidMount() {this.props.authUserThunk()}


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
export default connect(mapStateToProps,{authUserThunk,logout})(WithUrlHeaderContainer)
