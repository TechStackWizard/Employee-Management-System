import React, { useContext } from 'react'
import { use } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({data, empIndex, taskIndex}) => {  

  const [empData,setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) =>{
    const updatedEmployees = [...empData];
    const emp = updatedEmployees[empIndex]

    const task = emp.tasks[taskIndex];
    // console.log(tasks)

    if (!task || (!task.acceptTask && !task.active)) return;

    task.acceptTask = false;
    task.active = false;
    
    if(status === 'complete'){
      task.complete = true;
      emp.taskCount.complete += 1;
      emp.taskCount.active -= 1;
      
    }else if(status === 'failed'){
      task.failed = true
      emp.taskCount.failed += 1;
      emp.taskCount.active -= 1;
    }

    setUserData(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
  }

  return (
    
    <div className="flex-shrink-0 rounded-lg p-5 bg-green-500 h-full w-[300px]">
        <div className='flex justify-between items-center'>
        <h3 className='bg-red-500 w-min px-1 rounded-lg shadow-sm shadow-black mb-4'>{data.priority}</h3>
        <h3 className='font-bold'>{data.date}</h3>
        </div>
        <div className='mt-4 h-[40%]'>
        <h3 className='font-bold text-xl'>{data.taskHeading}</h3>
        <p className='text-sm mt-2'>{data.description}</p>
        </div>
        <div className="my-4 flex justify-between items-center">
            <button className='p-1 rounded bg-green-900' onClick={() => {updateTaskStatus("complete")}}>Mark as Complete</button>
            <button className='p-1 rounded bg-red-900' onClick={()=>{updateTaskStatus("failed")}}>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
