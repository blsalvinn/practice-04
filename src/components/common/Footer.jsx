import React from 'react'
import {Container , Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import {RiCake3Line, RiFacebookCircleFill, RiYoutubeFill, RiInstagramFill, RiWechat2Fill, RiShoppingBagFill, RiSendPlaneLine} from 'react-icons/ri'

const pages = [
  {
    name: 'facebook',
    icon: RiFacebookCircleFill
  },
  {
    name: 'youtube',
    icon: RiYoutubeFill
  },
  {
    name: 'instagram',
    icon: RiInstagramFill
  },
  {
    name: 'facebook',
    icon: RiFacebookCircleFill
  },
  {
    name: 'wechat',
    icon: RiWechat2Fill
  },
  {
    name: 'shoppe food',
    icon: RiShoppingBagFill
  },
]

const Footer = () => {
  return (
    <div className="bg-yellow-100 p-6 ">
      <Container>
        <Row lg={4} sm={2}  > 
          {/* about us */}
          <Col xs={6} md={4} className="mt-4 ">
            <div className="p-2">
              <Link to="/" className="flex items-center mb-4">
                  <span className="text-main font-[700] text-2xl">Food</span>
                  <RiCake3Line className="text-green-600 text-[20px]"></RiCake3Line>
              </Link>
              <p className='text-md font-semibold'>We are here to serve you <br/> have a good day!</p>
            </div>
          </Col>

          {/* other pages */}
          <Col xs={6} md={4} className="mt-4 " >
            <div  className="capitalize p-2">
              <h1 className=" text-xl font-extrabold mb-3">pages</h1>
              <ul>
                {
                  pages.map((items, index) => (
                    <li  key={index}>
                      <a href="http://localhost:3000/home " className="flex font-semibold mt-2 items-center ">
                        {<items.icon className='mr-2 w-4 h-4 text-emerald-500' />} {items.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Col>
          
          {/* contact */}
          <Col xs={12} md={4} className="mt-4">
            <div className="capitalize font-semibold p-2">
              <h1 className="text-xl font-extrabold mb-3 ">Contact</h1>
              <div className="mt-3 flex ">
                <h3 className="mr-2 text-lg font-bold">Location:</h3>
                <p className="text-sm">There are many ways to figure out where you are</p>
              </div>
              <div className="mt-3 flex ">
                <h3 className="mr-2 font-bold">Phone:</h3>
                <p className="text-sm">0398527047</p>
              </div>
              <div className="mt-3 flex ">
                <h3 className="mr-2 font-bold">Email:</h3>
                <p className="text-sm">vantuanxyz741@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} className="mt-4 ">
            <div className="p-2">
              <h1 className="capitalize text-xl font-extrabold mb-3" >Newsletter</h1>
              <p className="mb-4 text-sm font-semibold">Subscribe our newsletter</p>
              <form action="">
                <div className="relative">
                  <input type="text" className='p-[8px_10px] outline-none border-[1px] border-emerald-500 w-full rounded-sm' placeholder='Enter your email' />
                  <button className='p-[6px_10px] rounded-md hover:opacity-90 bg-main absolute top-[50%]  right-[0] translate-y-[-50%] translate-x-[-10%]' ><RiSendPlaneLine className="text-white" ></RiSendPlaneLine></button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer