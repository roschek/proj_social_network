const FOLLOW = 'FOLLOW'
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
let initialState = {
    users: [],
    pageSize: 4,
    totalUsers: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersAC = (usersCount) => ({type: SET_TOTAL_USERS, usersCount})