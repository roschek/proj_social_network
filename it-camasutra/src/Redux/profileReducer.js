import {getUser} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = "UPDATE-TEXT"
const SET_USER_PROFILE= "SET_USER_PROFILE"

let initialState = {
    postsData: [{post: "First post", likes: "14", id: '1'}, {
        post: "Second post",
        likes: "42",
        id: '2'
    }, {post: "Third post", likes: "2", id: '3'}],
    newPostText: '',
    profile: ''
}

export const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case ADD_POST:
            let post = state.newPostText
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {post: post, likes: 0, id: 9}]
            }

        case UPDATE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state

    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile =(profile) =>({type:SET_USER_PROFILE,profile})
export const updatePostActionCreator = (text) => ({type: UPDATE_TEXT, text: text})
export const getProfile =(userId)=>(dispatch)=>{
        getUser(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })

    }

