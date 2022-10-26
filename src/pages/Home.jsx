import {useState, useEffect} from 'react'
import {Header, Footer} from '../components'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import heroImg from '../assets/images/banner-img.png'
import {RiShieldCheckLine, RiCreativeCommonsNcLine, RiStarSFill} from 'react-icons/ri'
import {Category, CardProduct, Content} from '../components'
import features from '../assets/data/features'
import foodCategoryImg_1 from '../assets/images/hamburger.png'
import foodCategoryImg_2 from '../assets/images/pizza.png'
import foodCategoryImg_3 from '../assets/images/bread.png'
import products from '../assets/data/products'
import chefs from '../assets/data/chefs'
import Slider from "react-slick"


const Home = () => {

  const [category, setCategory] = useState('ALL')

  const [product, setProduct] = useState([])
  
  useEffect(() => {
    if(category.toLowerCase() === 'all') setProduct(products)
    else setProduct(products.filter(item => item.category === category.toLowerCase()))
    // window.scrollTo(0, 0)
  },[category])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="p-[10px_0]">
        {/* content */}
        <section className='mt-10'>
          <Container>
            <Row >
              {/* content hero */}
              <Col lg={6}>
                  <div className="flex justify-center flex-col h-full text-center lg:!text-left">
                    <h5 className="capitalize font-[700] text-xl mb-2">easy way to make an order</h5>
                    <h1 className='text-3xl font-extrabold text-gray-900 mb-2'>
                      <span className='uppercase font-extrabold text-3xl text-main mr-3'>hungry?</span> 
                      just <br /> order now  <span><Link to="/" className="text-main hover:text-emerald-500">Click here</Link></span>
                    </h1>
                    <p className="mt-2 mb-2 text-[16px] text-gray-600 leading-5 font-semibold">
                      Mrs S: Don't worry Mark, it's not your fault, we can eat the salami pizza and you can <br /> 
                      have the mushroom one. Why don't you both go and play upstairs, tea will be a little bit longer than expected!
                    </p>
                    {/* content button */}
                    <div className='flex gap-2 justify-evenly mb-4 mt-4 lg:justify-start'>
                      <button className="capitalize font-bold p-[10px_10px] bg-main text-white rounded-md hover:opacity-80 transition-all lg:mr-4">order now</button>
                      <button className='capitalize font-bold p-[10px_10px] border-[1px] border-main border-solid text-main rounded-md hover:opacity-80 transition-all'>see all foods</button>
                    </div>
                    {/* endow */}
                    <div className='flex justify-between m-[20px_0] lg:justify-start lg:gap-5'>
                      <div className='flex items-center'>
                        <RiCreativeCommonsNcLine className=" text-main w-7 h-7 mr-2"/>
                        <span>no shipping charge</span>
                      </div>
                      <div className='flex items-center'>
                        <RiShieldCheckLine className=" text-main w-7 h-7 mr-2"/>
                        <span>100% secure checkout</span>
                      </div>
                    </div>
                  </div>
              </Col>
              <Col lg={6}>
                  <div>
                      <img src={heroImg} alt="" className="w-full"/>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* category */}
        <section className="mt-10">
          <Category/>
        </section>
        {/* about serve */}
        <section className="mt-10">
          <Container>
            <Row>
              <Col lg={12}>
                  <div className="text-center mb-10">
                    <h3 className="capitalize font-bold text-xl text-main mb-4">what we serve ? </h3>
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-4">just sit back at home <br className='hidden lg:block' /> we will <span className='text-main'>take care</span></h1>
                    <p className="text-gray-600 text-sm mb-2 lg:text-base lg:mb-1">We and our partners store and access information on a device, such as cookies and process personal data</p>
                    <p className="text-gray-600 text-sm lg:text-base">We and our partners store and access information on a device, such as cookies and process personal data</p>
                  </div>
              </Col>
              {
                features.map((item, index) => (
                  <Col lg={4} md={4} key={index}>
                    <div className="flex flex-col items-center text-center mb-2 mt-2">
                      <img src={item.imgUrl} alt="" className='w-[100px] mb-2'/>
                      <h2 className='capitalize font-bold text-lg lg:text-xl mb-2'>{item.title}</h2>
                      <p className='text-gray-900 text-base'>{item.discription}</p>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </section>
        {/*papurlar foods */}
        
        <section className="mt-10 lg:mt-20">
              <Container>
                <Row>
                  <Col lg={12}>
                      <div className='text-center mb-8'>
                        <h1 className='capitalize text-3xl font-bold text-gray-900'>Popular foods</h1>
                      </div>
                  </Col> 
                  <Col lg={12} >
                      <div className="papurlar-category bg-main p-2 flex items-center justify-around">
                          <button className={`text-sm text-white p-[6px_10px] ${category === 'ALL' ? 'active' : ''}`} onClick={() => setCategory('ALL')}>All</button>
                          <button className={`flex items-center p-[6px_10px] gap-1text-sm text-white ${category === 'HAMBURGER' ? 'active' : ''}`}  onClick={() => setCategory('HAMBURGER')}>
                            <img className="w-6 mr-2" src={foodCategoryImg_1} alt="" />
                            Hamburger
                          </button> 
                          <button className={`flex items-center p-[6px_10px] gap-1text-sm text-white ${category === 'PIZZA' ? 'active' : ''}`} onClick={() => setCategory('PIZZA')}>
                            <img className="w-6 mr-2" src={foodCategoryImg_2} alt="" />
                            Pizza
                          </button>
                          <button className={`flex items-center p-[6px_10px] gap-1text-sm text-white ${category === 'JUICE' ? 'active' : ''}`}  onClick={() => setCategory('JUICE')}>
                            <img className="w-6 mr-2" src={foodCategoryImg_3} alt="" />
                            Juice
                          </button>
                      </div>
                  </Col>

                  {
                    product.map((product) => (
                      <Col lg={3} md={6} key={product.id} className="mt-[25px]">
                        <Link to={`/foods/${product.id}`}>
                          <CardProduct data={product} />
                        </Link>
                      </Col>
                    ))
                  }
                </Row>
              </Container>
        </section>
        
        {/* our chefs */}
        <section className="mb-20 mt-10">
          <Container>
            <Row>
              <Col lg={12}>
                <div className='text-center mt-20'>
                  <h3 className='capitalize text-xl font-bold text-main mb-6'>our chefs</h3>
                  <h1 className='capitalize text-2xl font-bold text-gray-900'>what about they?</h1>
                </div>
              </Col> 
              <Col lg={12} className='mt-10'>
                <Slider {...settings}>
                  {
                    chefs.map((chef, index) => (
                      <div key={index} className="p-2 ">
                          <div className="group border-[1px] border-solid p-3 shadow-sm rounded-md ">
                            <div className="flex justify-center">
                              <img className='w-60 shadow-sm h-60 object-cover object-top-center rounded-[50%]' src={chef.imgUrl} alt="" />
                            </div>
                            <div className="mt-7 ">
                              <h1 className="  font-bold text-xl text-gray-800 mb-2">{chef.name}</h1>
                              <div className="flex items-center mb-2">
                                {Array.from(new Array(chef.star)).map((star, index) => (
                                  <RiStarSFill key={index} className="text-main w-[25px] h-[25px]"/>
                                ))}
                              </div>
                              <p className=" text-limit-two text-sm text-gray-700 font-semibold">{chef.dsc}</p>
                            </div>
                            <Link to="/" className="inline-block hover:!text-white mt-6 p-[8px_20px] bg-emerald-500 text-white rounded-md hover:opacity-[0.8]">More</Link>
                          </div>
                      </div>
                    ))
                  }
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  )
}

export default Home