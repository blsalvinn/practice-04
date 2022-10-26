import {useState} from 'react'
import {RiArrowLeftSFill, RiArrowRightSFill} from 'react-icons/ri'

const Pagination = ({
  handleSetPage = () => {}, 
  lengthItems, 
  limitPage = 5,
  limit,
  currentPage, 
  setCurrentPage,
  
}) => {
  

  const [maxPage, setMaxPage] = useState(limitPage)

  const [minPage, setMinPage] = useState(0)

  const range = []

  for (let i = 1; i < Math.ceil(lengthItems / limit) + 1; i++) {
    range.push(i)
  }

  const handleSelectPage = (page) => {
    handleSetPage(page)
    setCurrentPage(Number(page))
  }


  const renderPage = (item, i) => {
    if(item > minPage && item <= maxPage) 
      return (
        <button  key={i} id={item} onClick={(e) => handleSelectPage(e.target.id)} className={`w-[30px] h-[30px] text-base font-bold  ${Number(item) === currentPage  ? 'bg-main rounded-[50%] text-white': '' }`}>
          {item}
        </button>
      )
    else return null
  }

  const handleNextPage = () => {
    handleSelectPage(currentPage <  range.length ? currentPage + 1: range.length)
    if(currentPage === maxPage && currentPage < range.length) {
      setMaxPage(pre => pre + limitPage)
      setMinPage(pre => pre + limitPage)
    }
  }

  // 1 2

  const handlePrePage = () => {
    handleSelectPage(currentPage > 1 ? currentPage - 1 : 1)
    console.log((currentPage - 1), minPage)
    if((currentPage - 1) % minPage === 0) {
      setMaxPage(pre => pre - limitPage)
      setMinPage(pre => pre - limitPage)
    }
  }

  return (
    <div className="flex justify-end items-center border-t-2 p-3">
        {range.length > limitPage && 
          <button className='mr-4' onClick={() => handlePrePage()} >
            <RiArrowLeftSFill className="w-5 h-5 text-gray-600 hover:text-gray-700"/>
          </button>
        }
        {range.map(renderPage)}
        {range.length > limitPage && 
          <button className='ml-4' onClick={() => handleNextPage()}>
            <RiArrowRightSFill className="w-5 h-5 text-gray-600 hover:text-gray-700"/>
          </button>
        }
    </div>
  )
}


export default Pagination