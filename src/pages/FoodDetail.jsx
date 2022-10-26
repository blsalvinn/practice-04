import {useEffect, useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import products from '../assets/data/products'
import {useParams,  Link, useNavigate} from 'react-router-dom'
import {RiCheckboxCircleLine} from 'react-icons/ri'
import { CardProduct, Comments, CommonSection} from '../components'
import bannerImg from '../assets/images/img_1.png'
import Slider from "react-slick"
import {useCartSlice, useReviewSlice, useAuthSlice, useCheckoutSlice} from '../redux/hooks'
import { useDispatch } from "react-redux";




const initPreviewData = {
    size: '',
    quantity: 1,
    price: 0
}

const initError = {type: '', errorMsg: ''}

const FoodDetail = () => {

   const param = useParams() 

   const navigation = useNavigate()

   const [product, setProduct] = useState();

   const [tab, setTab] = useState('dsc');
   
   

   const [sameProducts, setSameProducts] = useState([]) 

   const [selectSize, setSelectSize] = useState(0)

   const [error, setError] = useState(initError)

   const [previewData, setPreviewData] = useState()

   const [addSuccess, setAddSuccess] = useState(false)



//    redux hooks 
   const dispatch = useDispatch()

   const [checkout, checkoutActions ] = useCheckoutSlice()

   const [user] = useAuthSlice()

   const cartActions = useCartSlice()[1]

   const [{comments}, reviewActions] = useReviewSlice()


//    get product

   useEffect(() => {

        setProduct(products.find(item => item.id.toLocaleString() === param.id))
        window.scrollTo(0, 0)
        setSelectSize(0)
        setPreviewData(initPreviewData)


        return () => {
            document.removeEventListener('click', () => {})
        }
        
   }, [param.id, dispatch])  



   useEffect(() => {

        const randomArray = (arr) => {
            arr.map((item, i) => {
                const j = Math.floor(Math.random() * arr.length)
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            })
            return arr
        }

        if(product) {

            // setShowComment(comments.slice(0, limit))
            
            setSameProducts(randomArray(products.filter(item => item.category === product.category && item.id !== product.id)))

            setPreviewData(pre => ({...pre, size: product.size && product.size[selectSize] ? product.size[selectSize].name : '', price: product.size[selectSize].price} )) 
        }

   }, [comments, product])


//    slick settings 

   
    const RightArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div 
                onClick={onClick} 
                style={{...style}} 
                className={`${className} before:text-[36px] before:text-main before:content-['→'] z-8 translate-x-[-300%] translate-y-[-50%] `}
            />
        )
    }


    const LeftArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <div 
                onClick={onClick} 
                style={{...style}} 
                className={`${className} before:text-[36px] before:text-main before:content-['←'] z-8   translate-x-[225%] translate-y-[-50%] `}
            />
        )
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
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

//   set perviewProduct 

    const handleQuantity = (action) => {
        if(action === 'decr' && previewData.quantity !== 1) 
            setPreviewData(pre => (
                {...pre, quantity: Number(pre.quantity) > 1  ? Number(pre.quantity) - 1: 1}
            ))
        else if(previewData.quantity < product.currentQuantity && action === 'incr') {
            setPreviewData(pre => (
                {...pre, quantity:  pre.quantity < product.currentQuantity ? Number(pre.quantity) + 1: product.currentQuantity}
            ))
        }
    }

    const handleQuantityNumber = (value) => {
        if(/^[0-9]*$/.test(value)) 
            setPreviewData(pre => (
                {...pre, quantity:  Number(value) <= product.currentQuantity ? value : product.currentQuantity}
            ))
        else setPreviewData(pre => ({...pre}))
    }

    const handleSetSize = (value, index) => {
        if(previewData.size === value.name) {
            setSelectSize(null)
            setPreviewData(pre => ({...pre, size: ''}))
        } else {
            setSelectSize(index)
            setPreviewData(pre => ({...pre, size: value.name, price: value.price}))
            setProduct(pre => ({...pre, price: value.price}))
        }
        setError(initError)

    }


//   handle add to cart


  const handleAddtoCart = (type) => {
    const modelProduct = product.size.map((item) => item.name)
    if(!(product && Array.isArray(product.size) 
       && modelProduct.includes(previewData.size)
    ))
        setError(pre => ({...pre, type, errorMsg: 'Please select item type'}))
    else {
        const {size, ...newProduct} = product

        setPreviewData(pre => ({...pre, product: newProduct, cartId: Date.now()}))

        setError({...initError, type})
    }
  }
  
  useEffect(() => {
    if(error.type === 'addToCart' && !error.errorMsg ) {
        dispatch(cartActions.addToCart(previewData))
        setPreviewData(pre => ({...pre}))
        setError(initError)
        setAddSuccess(true)
    } 

    if(error.type === 'orderNow' && !error.errorMsg) {
      dispatch(checkoutActions.addProduct([previewData]))
      navigation('/checkout')
      
    }
  }, [error])


//   handle add product successfully
  useEffect(() => {
    if(addSuccess) {
        setTimeout(() => {
            setAddSuccess(false)
        }, 3000)
    }
  }, [addSuccess])

//   handle add Comment 


  return (
    <div className="relative">
        {
        addSuccess ? 
        <div className="z-30 bg-gray-600 p-2 flex items-center fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[200px] h-[100px] rounded-md">
            <RiCheckboxCircleLine className="mr-4 w-[50px] h-[50px] text-main "
        />
            <p className="text-white text-sm">Product added successfully</p> 
        </div>: null
        }
            {product ? 
            <div className="mt-10">
                <CommonSection title={product.name} bgUrl={bannerImg}/>
                <section className="mt-20">
                    <Container>
                        <Row>
                            <Col lg={5} md={6}>
                                {/* img */}
                                <div className="p-4 shadow rounded-md md:flex md:justify-center">
                                    <img className="w-[450px] h-[450px] object-scale-down " src={ product.imageUrl} alt="" />
                                </div>
                            </Col>
                            <Col lg={7} md={6} className="mt-10 lg:mt-0 md:m-0 md:flex md:justify-center md:items-center lg: lg:justify-start">
                                <div className="lg:p-4 lg:!pl-10 md:p-4 p-2 capitalize ">
                                    <h1 className="text-gray-800 text-3xl font-black mb-3" >{product.name}</h1>
                                    <p className="text-main text-lg font-bold mb-3">Price: <span className="text-2xl">{product.price + product.currency}</span></p>
                                    <p className="text-gray-800  text-base font-bold mb-3">Category: <span className="ml-2  bg-emerald-200 p-2 rounded-sm">{product.category}</span></p>
                                    <div className='m-[40px_0]'>
                                        {
                                            product && product.size.map((item, index) => (
                                                <button 
                                                onClick={() => handleSetSize(item, index)} 
                                                className={`p-[10px] text-base font-bold text-emerald-600 rounded-md 
                                                border-[1px] border-solid border-emerald-500 capitalize mr-2 ${selectSize === index ? 'bg-emerald-500 text-white' : ''}`} key={index}
                                                >
                                                    {item.name}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center text-gray-800  text-base font-bold mb-3">
                                        <p className=' '>
                                            quantity: 
                                        </p>
                                        <div className="ml-4 flex">
                                            <button  className='p-[2px_15px] text-base border-[1px] border-gray-400 hover:border-gray-600'  onClick={() => handleQuantity('decr')}>-</button>
                                            <input 
                                                type='text'
                                                className="p-[2px_0] text-base border-[1px] border-gray-500 w-[50px] text-center" 
                                                value={previewData.quantity ? previewData.quantity : ''} 
                                                // onChange={(e) => }
                                                onChange={(e) => handleQuantityNumber(e.target.value)}
                                                />
                                                
                                            <button 
                                            className={`p-[2px_15px] text-base border-[1px] border-gray-400 transition hover:border-gray-600 `} onClick={() => handleQuantity('incr')}>+</button>
                                        </div>
                                    </div>

                                    {previewData.quantity === product.currentQuantity ? 
                                        <p className='text-main text-base normal-case' >{'The quantity you selected has reached the maximum of this product'}</p>
                                        : null
                                    }

                                    { error.errorMsg ? <p className='text-main text-base normal-case' >{error.errorMsg}</p> : null}

                                    <div>
                                        <button 
                                            onClick={() => handleAddtoCart('addToCart')} 
                                            className="p-[10px] bg-white mr-4 text-emerald-500 rounded-md mt-4 border-[1px] 
                                            border-solid border-emerald-500 hover:opacity-80 transition"
                                        >
                                            Add to cart
                                        </button>

                                        <button 
                                            className="p-[10px] bg-main text-white rounded-md mt-4 border-[1px] 
                                            border-solid border-main hover:bg-white hover:!text-main transition"
                                            onClick={() => handleAddtoCart('orderNow')} 
                                        >
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
                {/* tab */}
                <section className="mt-10">
                    <Container>
                        <Row>
                            {/* nav */}
                            <Col lg={12}>
                                <div className="flex p-[10px_0] bordder shadow-bt">
                                    <h1 
                                        className={`mr-4 text-lg font-bold text-gray-700 cursor-pointer ${tab === 'dsc' ? '!text-main': ''}`} 
                                        onClick={() => setTab('dsc')}
                                    >
                                        Description
                                    </h1>
                                    <h1 
                                        className={`ml-4 text-lg font-bold text-gray-700 cursor-pointer ${tab === 'rev' ? '!text-main': ''} `} 
                                        onClick={() => setTab('rev')}
                                    >
                                        Review
                                    </h1>
                                </div>     
                            </Col>
                            {/* content */}
                            {
                                tab === 'dsc' ? 
                                <Col lg={12}>
                                    <div className="p-[30px_0]">
                                        <p className='text-base text-gray-limit00'>{product.discription}</p>
                                    </div>
                                </Col>: 
                                <Col lg={6} className="">
                                    {/* comment tab */}
                                    <div  className="p-[30px_0]">
                                        <Comments userInfo={user?.userInfo}/>
                                    </div>
                                </Col>
                            }

                        </Row>
                    </Container>
                </section>

                {/* the same food */}
                <section className="mt-10">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="m-[20px_0]">
                                    <h1 className='text-3xl font-extrabold'>The same products</h1>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Slider {...settings}>
                                    {
                                        sameProducts.map((product) => (
                                            <div key={product.id} className="p-2">
                                                <Link to={`/foods/${product.id}`}>
                                                    <CardProduct  data={product}/>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>: null}
    </div>
  )
}

export default FoodDetail