import {useState, useEffect} from 'react'
import { CommonSection, CardProduct, Pagination } from '../components'
import bannerImg from '../assets/images/subbanner.jpg'
import { Container, Row, Col} from 'reactstrap'
import products from '../assets/data/products'
import {Link} from 'react-router-dom'
import {RiSearchLine, RiArrowDownSLine, RiCheckFill} from 'react-icons/ri'

const options = ['All', 'Alphabetically A-Z', 'Alphabetically Z-A', 'High price', 'Low price']

const AllFoods = () => {

  const [option, setOption] = useState('All')

  const [openOptions, setOpenOptions] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")

  const [product, setProduct] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
   
  const limitProduct = 8


  useEffect(() => {
    setProduct(products)
  }, [])

  useEffect(() => {
   
  }, [option])


  let searchProducts = product.filter(item => {
    if(searchTerm === '') return products
    if(item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())) return item
  })

  const start = (currentPage - 1) * limitProduct
  
  const end = start + limitProduct

  const displayProducts =  searchProducts.slice(start, end) 

  const handleSetOption = (option) => {
    setOption(option)
    setOpenOptions(false)
    switch (option) {
      case 'All':
        setProduct([...products])
        break;
      case 'Alphabetically A-Z':
        setProduct([...product].sort((a, b) => a.name.toLowerCase() === b.name.toLowerCase() ? 0 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        break;
      case 'Alphabetically Z-A':
        setProduct([...product].sort((a, b) => a.name.toLowerCase() === b.name.toLowerCase() ? 0 : a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1))
        break;
      case 'High price':
        setProduct([...product].sort((a, b) =>   Number(b.price) - Number(a.price) ))
        break;
      case 'Low price':
          setProduct([...product].sort((a, b) =>   Number(a.price) - Number(b.price) ))
        break;
        
      default:
        break;
    }
  }
  
  return (
    <div>
      <CommonSection title="All food" bgUrl={bannerImg}/>
      <div className="mt-10">
        <Container>
          <section>
            <Row>
              <Col lg={6} className="m-[40px_0]">
                <div className=" hover:border-main w-2/3 flex items-center justify-between p-[6px_15px]   border-[1px] border-solid border-slate-400 rounded-sm">
                  <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className="outline-0 text-sm w-full  text-slate-800 font-medium transition" 
                    type="text" 
                    placeholder="I' m looking for ...." 
                  />
                  <RiSearchLine />
                </div>
              </Col>
              <Col lg={6} className="m-[40px_0]">
                <div className="flex justify-end relative">
                    <div onClick={() => setOpenOptions(pre => !pre)} className='cursor-pointer hover:border-main w-2/4 text-center flex items-center justify-center  p-[6px_15px] border-[1.8px] border-solid border-gray-500 rounded-sm'>
                      <p className=" text-sm font-bold mr-5">{option}</p>
                      <RiArrowDownSLine/>
                    </div>
                    <ul className={`absolute  top-[100%] p-0 right-0 z-10 bg-white w-2/4  
                      shadow transition-all duration-300 ease-in-out
                      ${openOptions ? ' pt-2 pb-2': ' hidden'}`}
                    >
                      {options.map((item, i) => {
                        return item === option ?
                        (
                          <li 
                            className="p-[8px_20px] text-sm transition font-semibold cursor-pointer hover:bg-main hover:text-white flex items-center"
                            onClick={(e) => handleSetOption(item)} 
                            key={i} 
                          >
                            { item } <RiCheckFill className='ml-auto'/>
                          </li>
                        ): 
                        (
                          <li 
                            className="p-[8px_20px] text-sm transition font-semibold cursor-pointer hover:bg-main hover:text-white"
                            key={i} 
                            onClick={(e) => handleSetOption(item)}
                          >
                            { item }
                          </li>
                        )
                      })}
                    </ul>
                </div>
              </Col>
              {displayProducts.map((product) => 
                (<Col sm={6}  md={4} lg={3} key={product.id} className="mt-4"> 
                  <Link to={`/foods/${product.id}`}>
                    <CardProduct data={product}/>
                  </Link>
                </Col>)
              )}

            </Row>
          </section>
          <section>
            <Row>
              <Col>
                <div className="mt-10">
                  <Pagination 
                    lengthItems={searchProducts.length}
                    limit={limitProduct}
                    limitPage={5}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </div>
  )
}

export default AllFoods