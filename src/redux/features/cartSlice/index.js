import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    products: [],
    totalAmount: 0,
    isCheckout: false,
    totalPayment: 0
}

const getTotalAmount = (state, action) => {
    state.totalAmount = state.products.reduce((a, b) => {
        return a + Number(b.quantity) * Number(b.price)
    }, 0)
} 

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const exitProduct = state.products.findIndex(cart => cart.size === action.payload.size && action.payload.product.id === cart.product.id)
            
            if(exitProduct !== -1) {
                state.products[exitProduct].quantity =state.products[exitProduct].quantity + action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
            getTotalAmount(state, action)
        },
        handleQuantity(state, action) {
            state.products.map(cart => {
                if(cart.cartId === action.payload.cartId) {
                    cart.quantity = action.payload.quantity
                    return cart
                } 
                return cart
            })
            getTotalAmount(state, action)
        },

        deleteCart(state, action) {
            state.products = state.products.filter(cart => cart.cartId !== action.payload.cartId)
            getTotalAmount(state, action)
        },

        clearCart(state, action) {
            state.products = []
            getTotalAmount(state, action)
        },
        
        openCheckout(state, action) {
            state.isCheckout = action.payload
        }
    }
})



export const cartActions = cartSlice.actions

export default cartSlice.reducer