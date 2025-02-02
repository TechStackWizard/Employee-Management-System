import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [empData,setUserData] = useContext(AuthContext)
    console.log(empData)



    return (
        <div id='hide-scroll' className='bg-[#1c1c1c] h-auto w-full rounded-lg px-5 py-2 flex flex-col flex-shrink-0'>
            <div className="rounded bg-green-800 py-4 px-2 flex justify-center my-2 items-center font-bold w-full text-white">
                <h2 className='w-1/5 font-bold text-center'>Emp_Name</h2>
                <h3 className='w-1/5 font-bold text-center'>New Task</h3>
                <h3 className='w-1/5 font-bold text-center'>Accept Task</h3>
                <h3 className='w-1/5 font-bold text-center'>Completed</h3>
                <h3 className='w-1/5 font-bold text-center'>Failed</h3>
            </div>

            <div id='hide-scroll' className='h-[100%]'>
                {empData.map((emp, idx) => {
                    return <div key={idx} className="rounded border py-4 px-2 flex justify-center my-2 items-center font-bold w-full">
                        <h2 className='w-1/5 text-white font-bold text-center'>{emp.firstname}</h2>
                        <h3 className='w-1/5 text-yellow-500 font-bold text-center'>{emp.taskCount.active}</h3>
                        <h3 className='w-1/5 text-orange-500 font-bold text-center'>{emp.taskCount.accepted}</h3>
                        <h3 className='w-1/5 text-green-500 font-bold text-center'>{emp.taskCount.complete}</h3>
                        <h3 className='w-1/5 text-red-500 font-bold text-center'>{emp.taskCount.failed}</h3>
                    </div>
                })}
            </div>




        </div>
    )
}

export default AllTask
