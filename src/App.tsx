import './App.css'
import { TaskList } from './components/TaskList/Tasklist'
import type { Task, TaskStatus } from './types'
import { useState } from 'react'

const tasks: Task[] = [
  {id:"01", title: "Task 1", description: "Description 1", status: "Pending" as TaskStatus, priority: "low", dueDate: "12/31/2025"},
  {id:"02", title: "Task 2", description: "Description 2", status: "In Progress"as TaskStatus, priority: "medium", dueDate: "1/1/2026"},
  {id:"03", title: "Task 3", description: "Description 3", status: "Completed"as TaskStatus, priority: "high", dueDate: "1/2/2026"}
]

function App() {
  const [taskList, setTaskList] = useState<Task[]>(tasks)
  function handleDelete(taksId: string){
    setTaskList(prevTasks => prevTasks.filter(task => task.id !== taksId))
  }
  return (
    <>
     <TaskList tasks ={taskList} onStatusChange={(id, status)=> console.log("Change:", id, status)} onDelete={handleDelete} />
    </>
  )
}

export default App
