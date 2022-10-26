import { useSelector } from "react-redux";
import {cartActions} from '../features/cartSlice'
import {reviewActions} from '../features/reviewSlice'
import {userLogin, userLogout} from '../features/authSlice'
import {checkoutActions} from '../features/checkoutSlice'
import {orderActions} from '../features/ordersSlice'
import {useDispatch } from 'react-redux'
import { useState } from "react";

// review action



export const useCartSlice = () => {
    const dispatch = useDispatch()

    const cartProducts = useSelector(state => state.userData.cart)

    return [cartProducts, cartActions, dispatch]
}

export const useReviewSlice = () => {

    const reviewProducts = useSelector(state => state.reviews)

    return [reviewProducts, reviewActions]

}

export const useAuthSlice = () => {
    
    const dispatch = useDispatch()

    const auth = useSelector(state => state.userData.user.data)

    return [auth, {userLogin, userLogout}, dispatch]
}

export const useCheckoutSlice = () => {
    
    const dispatch = useDispatch()

    const checkout = useSelector(state => state.checkout)

    return [checkout, checkoutActions, dispatch]
}

export const useOrderSlice = () => {
    
    const dispatch = useDispatch()

    const checkout = useSelector(state => state.orders)

    return [checkout, orderActions, dispatch]
}


export const useBase64 = () => {
    const [base64, setBase64] = useState('')
    const [error, setError] = useState('')
    const convertToBase64 = (file) => new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        if(!file) {
            setError("you must provide a file")
        }

        fileReader.readAsDataURL(file)

        fileReader.onload =() => resolve(fileReader.result)
    
        fileReader.onerror =(error) => reject(error)
    })

    const handleCreateBase64 = async (e) => {
        const file = e.target.files[0]
        console.log(file)
       try {
        const newBase64 = await convertToBase64(file)
        setBase64(newBase64)
       } catch (error) {
        setError(error)
       }
    }

    const handleClear = (e) => setBase64(null)


    return {
        file: base64,
        handleCreateBase64: handleCreateBase64,
        errors: error,
        handleClear: handleClear
    }
}