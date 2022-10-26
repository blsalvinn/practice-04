import React from 'react'
import {Header, Footer, Content} from '../index'
import {ButtonWrapper} from '../index'
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import { useCartSlice } from '../../redux/hooks'
import {RiCloseFill} from 'react-icons/ri'


const DefaultLayout = ({children}) => {
  const [carts, cartActions, dispatch] = useCartSlice()
  return (
    <div>
      {carts.isCheckout && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-rgba_2">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[425px] w-full max-h-[100vh] p-10 overflow-y-scroll z-10 bg-white items-center flex justify-center ">
                <div className="p-2 absolute top-[10px] right-[0]">
                  <RiCloseFill className='w-6 h-6 cursor-pointer' onClick={() => dispatch(cartActions.openCheckout(false))}/>
                </div> 
                <div>
                  <PayPalScriptProvider
                    options={{
                      "client-id": "AQkV0L-mRdhjJC0b-enLRwR6D5PQp7IfuOSQPmbT8Z3EJ7iETU_wQaC8hmvIFB0gXHm-VPpbR8UMuNo-",
                      components: "buttons",
                      currency: "USD"
                    }}
                  >
                  <ButtonWrapper
                    currency={'USD'}
                    showSpinner={true}
                    style={{"layout":"vertical"}}
                    amount={carts.totalAmount}
                    dispatchAction={() => dispatch(cartActions.clearCart(!carts.isCheckout))}
                  />
                  </PayPalScriptProvider>
                </div>
          </div>
        </div>
      ) 
      }
      <Header/>
        <Content>
        {children}
        </Content>
      <Footer/>
    </div>
  )
}

export default DefaultLayout