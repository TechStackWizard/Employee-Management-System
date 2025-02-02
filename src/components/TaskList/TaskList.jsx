import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ empIndex }) => {

  const [data] = useContext(AuthContext)
  
  // console.log(data)
  // console.log(empIndex)
  return (
    <div id="hide-scroll" className="flex justify-start items-center gap-4 my-20 h-1/3 flex-nowrap overflow-x-auto scroll">
      {data[empIndex].tasks.map((e, taskIndex) => {
        let taskComponents = [];

        if (e.active) {
          taskComponents.push(<NewTask data={e} empIndex={empIndex} taskIndex={taskIndex} key={`active-${taskIndex}`} />);
        }
        if (e.acceptTask) {
          taskComponents.push(<AcceptTask data={e} empIndex={empIndex} taskIndex={taskIndex} key={`accept-${taskIndex}`} />);
        }
        if (e.complete) {
          taskComponents.push(<CompleteTask data={e} key={`complete-${taskIndex}`} />);
        }
        if (e.failed) {
          taskComponents.push(<FailedTask data={e} key={`failed-${taskIndex}`} />);
        }

        return taskComponents;
      })}
    </div>
  );
};


export default TaskList
