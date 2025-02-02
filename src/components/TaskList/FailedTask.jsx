import React from 'react'

const FailedTask = (e) => {
  return (
    <div className="flex-shrink-0 rounded-lg p-5 bg-red-500 h-full w-[300px]">
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 w-min px-1 rounded-lg shadow-sm shadow-black mb-4'>{e.data.priority}</h3>
        <h3 className='font-bold'>{e.data.date}</h3>
        </div>
        <div className='mt-4 h-[40%]'>
        <h3 className='font-bold text-xl'>{e.data.taskHeading}</h3>
        <p className='text-sm mt-2'>{e.data.description}</p>
        </div>
        <div className="my-4 flex justify-center items-center">
            
            <button className='p-1 rounded bg-red-900 w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
