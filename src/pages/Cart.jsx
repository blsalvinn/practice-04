import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {CommonSection} from '../components'
import { useCartSlice, useCheckoutSlice } from '../redux/hooks'
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'


// This values are the props in the UI




const Cart = () => {

  const [carts] = useCartSlice()

  const [checkout, checkoutActions, dispatch] = useCheckoutSlice()

  const [showItems, setShowItems] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    setShowItems(carts.products)
  }, [carts.products])

  const itemsSelected = showItems.filter(item => item?.isChecked === true)
  const totalPayments = itemsSelected.reduce((a, b) =>  a + Number(b.price) * Number(b.quantity), 0)

  const handleChecked = (e) => {
    const {name, checked} = e.target
    if(name === 'selectedAll') {
      const tempProduct = carts.products.map((item) => ({...item, isChecked: checked}))
      setShowItems(tempProduct)
      // dispatch(checkoutActions.addProduct(tempProduct))
    } else {
      const tempProduct = showItems.map((item) => 
        item.cartId.toString() === name ? {...item, isChecked: checked}: item
      )
      setShowItems(tempProduct)
      dispatch(checkoutActions.addProduct(tempProduct.filter(item => item.isChecked)))
    }

  }
  console.log(checkout)
  const handleConfirmSlected = () => {
    if(checkout.selectedProducts.length > 0) {
      navigate('/checkout')
    } else {
      window.confirm('You have not selected any prodyct yet!')
    }
  }

  return (
    <div className="">
      <CommonSection title={'Cart'}/>

      {carts.products.length === 0 ? 
        (
          <div className='flex justify-center h-20 items-center mt-[80px]'>
            <h1 className="font-extrabold text-2xl text-slate-800 flex items-center"><span className='text-[100px]'>&#128528;</span> Your cart is empty </h1>
          </div>
        )  :
        (
          <div className="mt-10">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="tableCartPage overflow-auto shadow  p-3 rounded-sm">
                    <table className="w-full border-spacing-y-4 border-separate table-auto" >
                      <thead className="bg-gray-50 shadow-md  border-b-2 border-gray-200">
                        <tr>
                          <th className="p-2 ">
                            <input 
                              type="checkbox" 
                              name="selectedAll" 
                              onChange={handleChecked} 
                              checked={showItems.some(item => item.isChecked !== true) ? false : true} 
                            />
                          </th>
                          <th className='p-2 text-lg font-semibold'>Product</th>
                          <th className='p-2 text-lg font-semibold'>Name</th>
                          <th className='p-2 text-lg font-semibold'>Extras</th>
                          <th className='p-2 text-lg font-semibold'>Price</th>
                          <th className="p-2 text-lg font-semibold text-center">Quantity</th>
                          <th className="p-2 text-lg font-semibold">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showItems.map((item, i) => (
                          <tr key={i} className="hover:bg-slate-200 transition p-2" >
                            <td className="p-2">
                              <input  type="checkbox" checked={item?.isChecked || false} name={item.cartId} onChange={handleChecked}/>
                            </td>
                            <td className="whitespace-nowrap">
                              <img className="w-20 h-20 shadow-md border border-slate-500 rounded-[50%]" src={item.product.imageUrl} alt="" />
                            </td>
                            <td className="whitespace-nowrap">
                              <p>
                                {item.product.name} 
                              </p>
                            </td>
                            <td className="whitespace-nowrap">
                              <p>
                                {item.size}
                              </p>
                            </td>
                            <td className="whitespace-nowrap">
                              <p>
                                {item.price}
                              </p>
                            </td>
                            <td className="whitespace-nowrap">
                              <p className="text-center">
                                {item.quantity}
                              </p>
                            </td>
                            <td className="whitespace-nowrap">
                              <p>
                                {Number(item.price) * Number(item.quantity)}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={12} className="mt-10">
                  <div className="flex justify-center items-center flex-col lg:block">
                    <h1 className="text-lg font-semibold">Total: <span className="text-main text-xl ml-2">${totalPayments}</span></h1>
                    <div className="mt-2 lg:mb-10">
                        <button onClick={handleConfirmSlected}  className="p-[8px_10px] bg-main text-white rounded-md">Checkout</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )
      }

    </div>
  )
}

export default Cart