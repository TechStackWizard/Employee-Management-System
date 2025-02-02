import React from 'react'
import Header from '../OtherPages/Header'
import CreateTask from '../OtherPages/CreateTask'
import AllTask from '../OtherPages/AllTask'

const AdminDashboard = (props) => {
    

    return (
        <div className='w-full px-10 py-4'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard
