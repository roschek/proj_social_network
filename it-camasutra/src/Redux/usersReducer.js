import {followUser, getUsersApi, unfollowUser} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_FETCHING ='SET_FETCHING'
const FOLLOWING = 'FOLLOWING'
let initialState = {
    users: [],
    pageSize: 10,
    totalUsers: 0,
    currentPage: 1,
    isFetching: true,
    following: true,
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.usersCount}
        case SET_FETCHING:
            return {...state, isFetching : action.isFetching}
        case FOLLOWING:
            return {...state,following: action.isFollow}
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersAC = (usersCount) => ({type: SET_TOTAL_USERS, usersCount})
export const setFetchingStatusAC = (isFetching) =>({type:SET_FETCHING,isFetching})
export  const setFollowingAC = (isFollow)=>({type:FOLLOWING,isFollow})

export const getUsers=(currentPage, pageSize)=>{
    return (dispatch)=>{
    dispatch(setFetchingStatusAC(true))
    getUsersApi(currentPage, pageSize).then(data => {
        dispatch(setFetchingStatusAC(false))
       dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersAC(data.totalCount))
    })
        .catch(err => console.log(err))
}}

export const unfollowingUsers=(id)=>{
    return (dispatch)=>{
        dispatch(setFollowingAC(true))
            unfollowUser(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(id))
                }
                dispatch(setFollowingAC(false))
            })
            .catch(err => console.log(err))
    }}
export const followingUsers=(id)=>{
    return (dispatch)=>{
        dispatch(setFollowingAC(true))
            followUser(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(setFollowingAC(false))
            })
            .catch(err => console.log(err))
    }}

