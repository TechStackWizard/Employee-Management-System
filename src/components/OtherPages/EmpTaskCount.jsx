import React from 'react'

const EmpTaskCount = ({data}) => {

  return (
    <div className="flex gap-5 my-20">
      <div className='bg-blue-500 w-[45%] px-5 py-8  rounded-lg'>
        <h2 className='text-4xl font-bold'>{data.taskCount.active}</h2>
        <h3 className='font-bold text-xl'>New Tasks</h3>
      </div>
      <div className='bg-teal-500 w-[45%] px-5 py-8  rounded-lg'>
        <h2 className='text-4xl font-bold'>{data.taskCount.complete}</h2>
        <h3 className='font-bold text-xl'>Complete Tasks</h3>
      </div>
      <div className='bg-green-500 w-[45%] px-5 py-8 rounded-lg'>
        <h2 className='text-4xl font-bold'>{data.taskCount.accepted}</h2>
        <h3 className='font-bold text-xl'>Accepted Tasks</h3>
      </div>
      <div className='bg-red-500 w-[45%] px-5 py-8  rounded-lg'>
        <h2 className='text-4xl font-bold'>{data.taskCount.failed}</h2>
        <h3 className='font-bold text-xl'>Failed Tasks</h3>
      </div>
        
    </div>
  )
}

export default EmpTaskCount
