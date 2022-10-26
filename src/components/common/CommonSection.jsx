import React from 'react'
import banner from '../../assets/images/subbanner.jpg'

const CommonSection = ({title, bgUrl = banner}) => {
  return (
    <div>
        <div className="pt-[200px] bottom-4 relative bg-[length:100%] bg-no-repeat lg:pt-[300px] bg-[center_bottom_30%]" style={{backgroundImage:  `url(${bgUrl})`}}>
            <h1 className="absolute top-[50%] left-[10%] z-8 translate-y-[-50%] text-white text-3xl font-black capitalize" >{title}</h1>
        </div>
        
    </div>
  )
}

export default CommonSection