import * as axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": '72fc652d-b127-4a6d-a735-509b026e6e5d'
  }
})
export const getUsersApi = (currentPage = 1, pageSize = 10) => {
  return baseUrl.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
}

export const unfollowUser = (id) => {
  return baseUrl.delete(`follow/${id}`)
}

export const followUser = (id) => {
  return baseUrl.post(`follow/${id}`)
}
export const authUser = () => {
  return baseUrl.get(`auth/me`)

}
export const getUser = (id) => {
  return baseUrl.get(`profile/${id}`)
}
export const getUserStatus = (id) => {
  return baseUrl.get(`profile/status/` + id)
}
export const addStatus = () => {
  // eslint-disable-next-line no-restricted-globals
  return baseUrl.put(`profile/status/`, {status})
}

export const authLogin = (value) => {
  return baseUrl.post(`/auth/login`, value)
}
export const logoutFunc = () => {
  return baseUrl.delete(`/auth/login`)
}
export const savePhotoUpdate = (photo) => {
  const formData = new FormData()
  formData.append("image", photo)
  return baseUrl.put(`profile/photo/`, formData, {
    headers: {
      'Content-type': 'multipart/form-data'
    }
  })
}
