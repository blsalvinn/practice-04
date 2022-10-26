import {useState, useEffect} from 'react'
import { useReviewSlice} from '../../../redux/hooks'
import {useDispatch} from 'react-redux'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../Pagination'



const Comments = ({userInfo = null, limitComment = 5}) => {

    const dispatch = useDispatch()

    const navigation = useNavigate()

    const {id} = useParams()

    const [{productComments: comments}, reviewActions] = useReviewSlice()

    const [activeComment, setActiveComment] = useState()

    const [showMore, setShowMore] =  useState()

    const [rootComments, setRootComments] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const sort = () => {
        const userComments = comments.filter((comment) => comment.userId === userInfo.userId)
                                     .sort( (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

        const otherComments = comments.filter((comment) => comment.userId !== userInfo.userId)

        return [...userComments, ...otherComments].filter(comment => comment.parentId === null)
    }
    

    useEffect(() => {
        dispatch(reviewActions.getReviews(id))

        if(comments.length > 0) {
            const end = limitComment * Number(currentPage)
    
            const start = end - limitComment 

            setRootComments(sort().slice(start, end))
        }
    }, [id, comments.length])

    // get reply comment

    const getRepliesComment = (commentId) => comments.filter(comment => comment.parentId === commentId)
                                                     .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  

    // comment form

    console.log(comments)
    const addComment = (text, parentId = null, type = '') => {
        if(!userInfo) return navigation('/login')
        dispatch(reviewActions.addReview({
            id: Math.random().toString(36).substring(2, 10) ,
            content: text,
            parentId,
            ...userInfo,
            createdAt: new Date().toString(),
            productId: id
        }))
        dispatch(reviewActions.getReviews(id))
         setShowMore(parentId)
         type === 'adding' && setCurrentPage(1)
    }


    const deleteComment = ( id) => {
        // if(window.confirm("Are you sure you want to delete"))
            dispatch(reviewActions.delReview(id))
    }
    
    const updateComment = (text, id) => {
        dispatch(reviewActions.updateReview({id, text}))
    }

    const defaultRootComment = comments ?  sort() : []

    var handleSetPage = (page) => {
        const end = limitComment * Number(page)
        const start = end - limitComment 
        setRootComments(defaultRootComment.slice(start, end))
    }

    // activeComment?.type && 

  return (
    <div >
       
        <CommentForm
            submitLabel="write"
            handleSubmit={(text) => addComment(text, null, 'adding')}
            handleCancel={() => setActiveComment({id: '', type: ''})}
        />
        {
            rootComments.map(comment => (
                <Comment 
                    key={comment.id} 
                    comment={comment} 
                    replies={getRepliesComment(comment.id)}
                    setActiveComment={setActiveComment}
                    activeComment={activeComment}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    showMore={showMore}
                    setShowMore={setShowMore}
                />
            ))
        }
        <div className="mt-10">
            <Pagination 
                lengthItems={defaultRootComment.length}
                limit={limitComment}
                handleSetPage={handleSetPage}
                limitPage={5}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                // handleNextPage={handleNextPage} 
                // currentPage={currentPage}
            />
        </div>
    </div>
  )
}

export default Comments