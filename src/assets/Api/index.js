import axios from 'axios'

export const URL_API = process.env.REACT_APP_URL
export const IMG_URL = process.env.REACT_APP_URL + 'static/'

const API = axios.create({
    baseURL: `${URL_API}api/`,
})


API.interceptors.request.use((config) => {
    const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.data?.token
    config.headers.Authorization = token ? token : ''
    return config
})

console.log(JSON.parse(localStorage.getItem("user"))?.data?.token)


export  const loginApi = (data) => API.post('auth/login/', data)

export  const checkCode = (data) => API.post('auth/check_code/', data)

export  const registerApi = (data) => API.post('auth/register/', data)

export  const getNewCode = (data) => API.post('auth/get_code/', data)

export  const updateUserApi = (id, data) => API.put('user/'+id, data)

export  const getPayment = (data) => API.post('payment/', data)
export  const createOrder = (data) => API.post('order/', data)

export const uploadSigleImage = (data) => {
    return API.post('/upload/single_image', data)
 }

 export const uploadMultipleImage = (data) => {
    return API.post('/upload/multiple_image', data)
 }

export const delImage = (id) => {
   return API.delete('/upload/delete_image/'+id)
}
