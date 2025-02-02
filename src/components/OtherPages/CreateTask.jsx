import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {



    const [empData, setUserData] = useContext(AuthContext)

    const [taskHeading, setTaskHeading] = useState('')
    const [date, setDate] = useState()
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    // const [newTask, setNewTask] = useState({});

    const submitHandler =  (e) => {
        e.preventDefault();

        const newTask = {
            taskHeading,
            date,
            priority: "High",
            category,
            description,
            acceptTask: false,
            active: true,
            failed: false,
            complete: false
        }
        const data = empData;

        data.forEach(emp => {
            if (assignTo == emp.firstname) {
                emp.tasks.push(newTask)
                emp.taskCount.active = emp.taskCount.active + 1
                // console.log(emp)
            }
        });
        localStorage.setItem('employees', JSON.stringify(data))
        setUserData(data)
        

        setTaskHeading('');
        setDate();
        setAssignTo('');
        setCategory('');
        setDescription('');

    }

    return (
        <div className='bg-[#1C1C1C] p-5 rounded-lg w-full my-10'>
            <h3 ><span className='font-bold border border-white rounded-[50%] px-2 text-xl'>+</span>
                <span className='mx-2'>Create Task</span>
            </h3>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex  justify-between gap-32'>
                <div className='w-1/2'>

                    <div className='my-4'>
                        <h3>Task Tittle</h3>
                        <input
                            value={taskHeading}
                            onChange={(e) => { setTaskHeading(e.target.value) }} type="text" className=' bg-transparent border border-white w-full rounded py-2 px-2 mt-2' required placeholder='Make a UI design' />
                    </div>
                    <div className='my-4'>
                        <h3>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }} type="date" className='w-full bg-transparent border border-white p-1 rounded py-2 px-2 mt-2' />
                    </div>
                    <div className='my-4'>
                        <h3>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => { setAssignTo(e.target.value) }}
                            type="text" className='w-full bg-transparent border border-white p-1 rounded py-2 px-2 mt-2' required placeholder='Employee NAme' />
                    </div>
                    <div className='my-4'>
                        <h3>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            type="text" placeholder='Design, Development etc' className='w-full bg-transparent border border-white p-1 rounded py-2 px-2 mt-2' required />
                    </div>
                </div>

                <div className='w-1/2 flex flex-col justify-between'>

                    <div className='my-4 h-[60%]'>
                        <h3>Description</h3>
                        <textarea
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            name="task-message" id="task-message" className='w-full  bg-transparent border border-white rounded py-2 px-2 mt-2 h-full'></textarea>
                    </div>
                    <button className='bg-blue-900 w-full text-center my-4 py-3 font-bold tracking-widest rounded-xl hover:bg-blue-700'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
