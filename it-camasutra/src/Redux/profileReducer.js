import {addStatus, getUser, getUserStatus,savePhotoUpdate} from "../api/api";


const ADD_POST = 'ADD-POST'
const UPDATE_TEXT = "UPDATE-TEXT"
const SET_USER_PROFILE= "SET_USER_PROFILE"
const SET_STATUS ="SET_STATUS"
const SAVE_PHOTO="SAVE_PHOTO"

let initialState = {
    postsData: [{post: "First post", likes: "14", id: '1'}, {
        post: "Second post",
        likes: "42",
        id: '2'
    }, {post: "Third post", likes: "2", id: '3'}],
    newPostText: '',
    profile: '',
    status:''
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
        case SET_STATUS:
            return {...state, status: action.status}
        case  SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos:action.photos} }
        default:
            return state

    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile =(profile) =>({type:SET_USER_PROFILE,profile})
export const updatePostActionCreator = (text) => ({type: UPDATE_TEXT, text: text})
export const setStatus = (status) =>({type:SET_STATUS, status})
export const setPhotoSuccess = (photos)=>({type:SAVE_PHOTO, photos})
export const getProfile =(userId)=>(dispatch)=>{
        getUser(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })

    }
    export const getStatus =(userId)=>(dispatch)=>{
       getUserStatus(userId)
           .then(res=>{
               dispatch(setStatus(res.data))
           })

    }
export const updateStatus =(status)=>(dispatch)=>{
    addStatus(status)
        .then(res=>{
            if(res.data.resultCode === 0){
            dispatch(setStatus(status))}
        })
        .catch(err=>console.log(err))
}
export const savePhoto =(file)=>(dispatch)=>{
    savePhotoUpdate(file)
        .then(res=>{
            if(res.data.resultCode === 0){
                dispatch(setPhotoSuccess(res.data.data.photos))}
        })
        .catch(err=>console.log(err))
}


