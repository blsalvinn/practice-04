import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    orders: [],
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders = [...state.orders,...action.payload]
            
        }
    }
})


export const orderActions = orderSlice.actions

export default orderSlice.reducer