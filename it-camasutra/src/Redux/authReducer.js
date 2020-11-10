import {authLogin, authUser, logoutFunc} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = "SET_USER_DATA"
const UNFOLLOW = "UNFOLLOW"
const AUTH_LOGIN = "AUTH_LOGIN"
const AUTH_ERROR = "AUTH_ERROR"

let initialState = {
  userId: '',
  email: '',
  login: '',
  isAuth: false,
  isAuthError: false

}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,

      }
    case AUTH_LOGIN:
      return {
        ...state,
        isAuth: true,
        isAuthError: false
      }
    case AUTH_ERROR:
      return {
        ...state,
        isAuthError: true
      }
  }

  return state
}

export const setUserDataAC = (userId, email, login, isAuth, isAuthError) => ({
  type: SET_USER_DATA,
  data: {userId, email, login, isAuth, isAuthError}
})
export const setLoginAuth = () => ({type: AUTH_LOGIN})
export const setErrorAuth = () => ({type: AUTH_ERROR})

export const authUserThunk = () => {
  return (dispatch) => {
    authUser()
        .then(res => {
          if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setUserDataAC(id, email, login, true))
          }
          else {
            dispatch(setErrorAuth())
          }
        })
        .catch(err => console.log(err))
  }
}

export const authLoginThunk = (value) => {
  return (dispatch) => {
    authLogin(value)
        .then(res => {
          console.log(res.data)
          if (res.data.resultCode === 0) {
            dispatch(authUserThunk())
          } else {
            dispatch(setErrorAuth())
          }
        })

  }
}
export const logout = () => {
  return (dispatch) => {
    logoutFunc().then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    })
  }
}
