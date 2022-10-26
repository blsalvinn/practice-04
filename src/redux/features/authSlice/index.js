import  {createSlice} from '@reduxjs/toolkit' 



const initialState = {
    data: null
}


const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        userLogin: (state, action) => {
           state.data = action.payload
        },
        userLogout: (state, action) => {
            state.data = null
        },
        register: (state, action) => {
            state.data = action.payload
        },
        updateUser: (state, action) => {
            state.data = {...state.data, ...action.payload}
        }
    }
})

export const {userLogin, userLogout, register, updateUser} = authSlice.actions

export default authSlice.reducer