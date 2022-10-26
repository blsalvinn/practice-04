import {useState} from 'react'

const CommentForm = ({
    submitLabel, 
    handleSubmit,
    style = {
        image: 'w-14 h-14',
        form: ''
    },
    initialText = '',
    handleCancel = false,
    avatarUser=''
}) => {

    const [text, setText] = useState(initialText)

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(text)
        setText('')
        handleCancel && handleCancel()
    }

  return (
    <form className={`flex items-center mt-2  lg:w-full  ${style.form}`} onSubmit={onSubmit}>
        {avatarUser && 
            (
                <div className="mr-4 flex-shrink-0">
                    <img className="w-10 h-10 rounded-full object-cover border-[1px] border-solid border-gray-200" src={ avatarUser} alt="" />
                </div>
            )
        }
        <div className="w-full p-2 " >
            <input 
                placeholder="Your comment...." 
                type="text" 
                className= "outline-none border-b-2 w-full text-sm focus:border-b-main transition origin-center duration-300" 
                value={text}
                // onFocus={() => setDisplayActComent(true)}
                onChange={(e) => setText( e.target.value)}
                />
            {
                // displayActComent ? 
                <div className="mt-2 flex justify-end items-center">
                    {handleCancel && 
                    (
                        <button 
                            type="button" 
                            className="p-2 text-xs  font-bold text-gray-600 uppercase mr-4"
                            onClick={() => handleCancel()}
                        >
                            Cancel
                        </button>
                    )
                    }
            
                    <button 
                        disabled={text.length === 0}
                        className={`p-2 text-xs font-bold text-white uppercase bg-emerald-400 rounded-sm ${!text && 'opacity-50 cursor-not-allowed'}`}
                    >
                        {submitLabel}
                    </button>
                </div>
                // : null
            }
        </div>
    </form>
  )
}

export default CommentForm