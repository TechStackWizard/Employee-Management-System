import React from 'react'

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 text-white font-bold text-2xl bg-[rgba(0,0,0,0.9)] p-4 rounded-lg z-[1000] w-screen h-screen flex flex-col justify-center items-center gap-2'>
        <div className='w-16 h-16 border-4 relative border-transparent rounded-[50%] animate-spin'>
            <div className='w-4 h-4 bg-blue-600 absolute top-0 left-0 rounded-[50%]'></div>
        </div>
      <span>Loading...</span>
    </div>
  )
}

export default Loader
