import React from 'react'
import Header from '../OtherPages/Header'
import EmpTaskCount from '../OtherPages/EmpTaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='px-10 py-4 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <EmpTaskCount data={props.data}/>
      <TaskList data={props.data} empIndex={props.data.id-1}/>
    </div>
  )
}

export default EmployeeDashboard
