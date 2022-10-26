import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedProducts: [],
    totalPayments: 0
}


const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.selectedProducts = action.payload
            state.totalPayments = state.selectedProducts.reduce((a, b) =>  a + Number(b.price) * Number(b.quantity), 0)
        },
        clearProduct: (state, action) => {
            state.selectedProducts = []
            state.totalPayments = 0
        }
    }
})

export const checkoutActions = checkoutSlice.actions

export default checkoutSlice.reducer