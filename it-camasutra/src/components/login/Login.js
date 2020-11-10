import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {logout} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {withRouter, Redirect} from "react-router-dom";


const Login = (props) => {
  /*componentDidMount() {
    if (this.props.isAuth) {
  this.props.history.push('/profile')
    }
   }*/
  let [editMode, changeEditMode] = useState(false)
  const throwError = () => {
    if (props.isAuthError === true) {
      changeEditMode = true
    }
  }
 throwError()
  return (
      <div>
        {!editMode &&
        <div className="container w-50 mt-5">
          <h1 className="text-center">Login</h1>
          <LoginForm/>
          <button className="btn btn-primary mt-5" onClick={props.logout}>Logout</button>
        </div>}

        {
          editMode &&
          <div className="container w-50 mt-5">
            <h1 className="text-center text-danger">Неправильный пароль</h1>
            <LoginForm/>
            <button className="btn btn-primary mt-5" onClick={props.logout}>Logout</button>
          </div>
        }
      </div>
  )
}

export default withRouter(connect(null, {logout})(Login))
