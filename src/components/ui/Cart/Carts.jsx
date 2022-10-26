import {useEffect, useState} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import CartItem from './CartItem'
import {useCartSlice} from '../../../redux/hooks'
import {Link} from 'react-router-dom'

const Carts = ({openCart, setOpenCart}) => {
  const [carts, cartActions, dispatch] = useCartSlice()

  const {handleQuantity, deleteCart, openCheckout} = cartActions

  return (
    <div className={`fixed top-0 right-0 bottom-0 left-0 bg-rgba_2 z-[100000000000000]  ${openCart ? 'block': 'hidden'}`}>
      <div className="absolute right-0 top-0 bg-slate-100 md:w-[425px] lg:w-[425px] w-[100%] p-3 h-[100%] shadow-sm border-[1px] border-solid  ">
        <div className="p-2">
                <RiCloseFill className='w-6 h-6 cursor-pointer' onClick={() => setOpenCart(false)}/>
        </div>
        {
          carts.products.length === 0 ? 
          (
            <div className='flex justify-center h-20 items-center mt-[80px]'>
              <h1 className="font-extrabold text-2xl text-slate-800 flex items-center"><span className='text-[100px]'>&#128528;</span> Your cart is empty </h1>
            </div>
          ) : 
          (
            <div>
              
              {/* close cart */}

              {/* cart item */}
              <div className="mt-10 max-h-[calc(100vh-250px)] lg:max-h-[calc(100vh-180px)] overflow-y-scroll">
                {
                  carts.products.map((product) => (
                    <CartItem 
                      key={product.cartId} 
                      data={product} 
                      handleQuantity={handleQuantity}
                      deleteCart={deleteCart}
                      />
                  ))
                }
              </div>

              {/* check out */}
              <div className="absolute left-0 bottom-0 right-0 h-[60px] p-[10px_20px] flex justify-center flex-col  bg-main   ">
                <div className="flex items-center justify-between">
                  <h2 className='text-white text-base '>
                    Total Amount: <span className='ml-2 font-extrabold text-xl'>{carts.totalAmount + 'VND'} </span>
                  </h2>
                  <button onClick={() => dispatch(openCheckout(true))} className="p-2 bg-white rounded-md text-emerald-500 font-bold hover:text-emerald-600 ">
                    Checkout
                  </button>
                </div>

              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Carts