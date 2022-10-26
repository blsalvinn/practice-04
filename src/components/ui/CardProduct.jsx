import React from 'react'

const CardProduct = ({data: product}) => {
  return (
    <div className='group p-4 flex flex-col items-center justify-center border border-gray-500 rounded-md'>
        <div className="flex justify-center">
        <img className="group-hover:scale-105 transition w-full h-[200px] object-scale-down" src={product.imageUrl} alt="" />
        </div>
        <div className="mt-4">
        <h2 className="text-limit max-w-[150px] font-extrabold capitalize text-lg text-center mb-4" >{product.name}</h2>
        <div className="overflow-hidden lg:block lg:text-center">
            <h3 className="text-limit mb-4 lg:max-w-[150px] uppercase font-bold  text-main text-xl">{Number(product.price) + product.currency}</h3>
            <button className=" p-2 bg-emerald-500 text-[14px] rounded-md border-[1px] border-solid border-emerald-500 text-white font-bold hover:bg-white hover:!text-emerald-500 transition">View Details</button>
        </div>
        </div>
  </div>
  )
}

export default CardProduct