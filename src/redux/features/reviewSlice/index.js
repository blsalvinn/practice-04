import {createSlice} from '@reduxjs/toolkit'

const comments = [
    {
        id: 'o1wwqpw',
        userName: 'tuan leo',
        userId: '507f1f77bcf86cd799439011',
        content: 'is supper great! haha frist comment',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 1
    },
    {
        id: 'ghilldf',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439012',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 1
    },
    {
        id: '2q2cpe6',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439013',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 1
    },
    {
        id: 'egczfcq',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439011',
        content: 'is supper great! hahahaha',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 3
    },
    {
        id: '7sw1my2',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439015',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 3
    },
    {
        id: 'z6ttw5t',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439016',
        content: 'is supper great!  ',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 2
    },
    {
        id: 'ci43glh',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439017',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 2
    },
    {
        id: 'ci43glhx',
        userName: 'jack supper ',
        userId: '507f1f77bcf86cd799439017',
        content: 'keep it up!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: 'ci43glh'
    },
    {
        id: 'g45j6u2',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd79943908',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 3
    },
    {
        id: '1zleohp',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439019',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 5
    },
    {
        id: 'vpw59d5',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439021',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 7
    },
    {
        id: 'vnm5f3o',
        userName: 'jack supper',
        userId: '507f1f77bcf86cd799439032',
        content: 'is supper great!',
        createdAt: new Date().toString(),
        avatar: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
        parentId: null,
        productId: 9
    }
]

const initialState = {
    comments: comments,
    productComments: []
}

const reviewSlice = createSlice({
    initialState,
    name: 'review',
    reducers: {
        addReview: (state, action) => {
            state.comments.push(action.payload)
        }, 
        getAllReviews: (state, action) => {
            state.comments = state.comments
            // console.log(state.comments.concat(comments))
        },
        getReviews: (state, action) => {
            const newReview = state.comments.filter((comment) => comment.productId === action.payload)
            state.productComments = newReview
        },
        delReview: (state, action) => {
            state.comments = state.comments.filter((comment) => comment.id !== action.payload)
        },
        updateReview: (state, action) => {
            console.log(action.payload)
            
            state.comments = state.comments.map((comment) => {
                if(comment.id === action.payload.id) return {
                    ...comment, 
                    content: action.payload.text
                }
                return comment
            })
        }
    }
})

export const reviewActions = reviewSlice.actions

export default reviewSlice.reducer