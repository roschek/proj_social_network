const SET_USER_DATA = "SET_USER_DATA"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
    userId: '',
    email: '',
    login: '',
    isAuth: true

}
 export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    }

    return state
}

export const setUserDataAC=(userId,email,login)=>({type:SET_USER_DATA, data:{userId,email,login}})

