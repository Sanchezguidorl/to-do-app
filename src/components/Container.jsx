import React, { useEffect, useState } from 'react'
import '../styles/Container.css'
import FormTasks from './FormTasks'
import Task from './Task'

function Container () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // Recuperar datos del almacenamiento local cuando se carga el componente
    const storedItems = JSON.parse(localStorage.getItem('tasks'))
    if (storedItems) {
      setTasks(storedItems)
    }
    return () => null
  }, [])

  const addTask = (newTask, idNumb) => {
    const allTasks = [...tasks, { name: newTask, id: idNumb }]
    setTasks(allTasks)
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }

  const deleteTask = (id) => {
    const allTasks = tasks.filter((t) => t.id !== id)
    setTasks(allTasks)
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }

  const editTask = (id) => {

  }

  return (
    <div className='container'>
        <h2>Mis tareas</h2>
        <FormTasks handleClick={addTask} />
        {
          tasks.map((task) =>
            (<Task key={task.id} id={task.id} deleteTask={deleteTask} editTask={editTask} task={task.name} />)
          )
        }
    </div>
  )
}

export default Container
