import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import categories from '../../assets/data/categories'



const Category = () => {
  return (
    <div>
        <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
                   {
                    categories.map((item, index) => (
                      <Col key={index}>
                        <div key={item.id} className="flex items-center justify-center  mb-[calc(1.5rem*0.5)] mt-[calc(1.5rem*0.5)] 
                           p-2 bg-main rounded-md cursor-pointer hover:scale-[1.02]  transition ease-in-out duration-300 lg:justify-start">
                          <img src={item.image} alt="" className='w-[100px] h-[100px] mr-2 object-scale-down'/>
                          <h1 className="capitalize text-base font-semibold text-white ml-2">{item.name}</h1>
                        </div>
                      </Col>
                    ))
                   } 
            </Row>
        </Container>
    </div>
  )
}

export default Category