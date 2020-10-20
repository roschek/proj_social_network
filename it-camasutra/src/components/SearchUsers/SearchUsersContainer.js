import React from "react";
import {connect} from "react-redux";
import {followAC, setPageAC, setTotalUsersAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";
import * as axios from 'axios'
import Members from "./Members/Members";
import SearchUsersApi from "./SearchUsersApi";




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers:state.usersPage.totalUsers,
        currentPage:state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followId: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
        dispatch(unFollowAC(userId))
    },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page)=>{
            dispatch(setPageAC(page))
        },
        setTotalUsers: (usersCount)=>{
            dispatch(setTotalUsersAC(usersCount))
        }
}
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsersApi)
export default SearchUsersContainer