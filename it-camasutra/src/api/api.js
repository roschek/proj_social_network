import * as axios from 'axios'

const baseUrl = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '72fc652d-b127-4a6d-a735-509b026e6e5d'
    }
})
export const getUsers = (currentPage=1,pageSize=10) => {
    return baseUrl.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(res=> res.data)
}

export const unfollowUser = (id)=>{
    return baseUrl.delete(`follow/${id}`)}

export const followUser =(id)=>{
    return baseUrl.post(`follow/${id}`)
}
export const authUser =()=>{
    return baseUrl.get(`auth/me`)

}