import React from "react";
import {connect} from "react-redux";
import {
    followAC, followingUsers, getUsers,
    setFetchingStatusAC, setFollowingAC,
    setPageAC,
    setTotalUsersAC,
    setUsersAC,
    unFollowAC, unfollowingUsers
} from "../../Redux/usersReducer";

import SearchUsersApi from "./SearchUsersApi";




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers:state.usersPage.totalUsers,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        isFollow:state.usersPage.isFollow,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followId: (userId) => {
            dispatch(followAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsers: (usersCount)=>{
            dispatch(setTotalUsersAC(usersCount))
        },
       setFetching:(isFetching)=>{
            dispatch(setFetchingStatusAC(isFetching))
       },
        setFollowing:(isFollow)=>{
            dispatch(setFollowingAC(isFollow))
        },
        getUsers: (currentPage, pageSize)=>{
            dispatch(getUsers(currentPage,pageSize))
        },
        unfollowingUsers:(id)=>{
            dispatch(unfollowingUsers(id))
        },
        followingUsers:(id)=>{
            dispatch(followingUsers(id))
        }
}
}

const SearchUsersContainer = connect(mapStateToProps, mapDispatchToProps)(SearchUsersApi)
export default SearchUsersContainer