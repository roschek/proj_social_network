import React from "react";
import {Field, Form} from "react-final-form";
import {connect} from "react-redux";
import {authLoginThunk} from "../../Redux/authReducer";
import {withRouter, Redirect} from "react-router-dom";


const required = value => (value ? undefined : 'Это обязательное поле')
const LoginForm = (props) => {
  return (
      <Form name="authForm"
            onSubmit={function onSubmit(values){props.authLoginThunk(values)}}
            render={({handleSubmit, form, values, meta, submitting, pristine}) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Field type="email" className="form-control" id="exampleInputEmail1"
                           name="email" validate={required}>
                      {({input, meta}) => (
                          <div>
                            <label>Email adress</label>
                            <input {...input} type="email" className="form-control" placeholder="email"/>
                            {(meta.error && meta.touched )||meta.submitError&&
                            <span className="text-danger font-weight-bold">{meta.error||meta.submitError}</span>}
                          </div>
                      )}
                    </Field>

                  </div>
                  <div className="form-group">
                    <Field component="input" name="password" type="password" className="form-control"
                           id="exampleInputPassword1" validate={required}>
                      {({input, meta}) => (
                          <div>
                            <label>password</label>
                            <input {...input} type="password" className="form-control" placeholder="password"/>
                            {meta.error && meta.touched &&
                            <span className="text-danger font-weight-bold">{meta.error}</span>}
                          </div>
                      )}
                    </Field>
                  </div>
                  <div className="form-group form-check">
                    <Field component="input" name="rememberMe" type="checkbox" className="form-check-input"
                           id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  </div>
                  <button  type="submit" className="btn btn-primary" disabled={submitting || pristine}>Submit
                  </button>
                </form>)}/>
  )
}

export default withRouter(connect(null,{authLoginThunk})(LoginForm))
