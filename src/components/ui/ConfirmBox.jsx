import React from 'react'

const ConfirmBox = ({
  confirmLabel, 
  confirmTitle, 
  handleAccept,
  handleDeny
}) => {
  return (
    <div className="p-2 w-80 h-40 shadow-md flex flex-col items-center justify-center bg-white rounded-md">
        <p className="text-lg text-center font-extrabold">{confirmTitle}</p>
        <div className="mt-8">
            <button 
              onClick={() => handleAccept()}
              className={`p-2 text-xs font-bold text-white uppercase bg-emerald-400 rounded-sm mr-5 hover:bg-emerald-600 transition`}
            >
              {confirmLabel}
            </button>
            <button 
                onClick={() => handleDeny()}
                className={`p-2 text-xs font-bold text-white uppercase bg-emerald-400 rounded-sm ml-5 hover:bg-emerald-600 transition`}
              >
                No
            </button>
        </div>
    </div>
  )
}

export default ConfirmBox