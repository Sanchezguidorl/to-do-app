import React, { useEffect, useState } from 'react'
import '../styles/Container.css'
import FormTasks from './FormTasks'
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

function Container () {
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState('')
  const [hidden, setHidden] = useState('')
  const addIcon = <FontAwesomeIcon icon={faSquarePlus} />

  useEffect(() => {
    // Recuperar datos del almacenamiento local cuando se carga el componente
    const storedItems = JSON.parse(localStorage.getItem('tasks'))
    if (storedItems) {
      setTasks(storedItems)
    }
    return () => null
  }, [])

  // Agregar nueva tarea a la lista
  const addTask = (newTask, idNumb) => {
    const allTasks = [...tasks, { name: newTask, id: idNumb }]
    setTasks(allTasks)
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }

  // Eliminar tarea dado un id
  const deleteTask = (id) => {
    const allTasks = tasks.filter((t) => t.id !== id)
    setTasks(allTasks)
    localStorage.setItem('tasks', JSON.stringify(allTasks))
  }

  // Guardar cambios realizados al editar la tarea
  const updateTask = (updatetask) => {
    const taskUpdate = tasks.map(e => {
      if (updatetask.id === e.id) {
        e.name = updatetask.name
        return e
      } else {
        return e
      }
    })
    setTasks(taskUpdate)
    localStorage.setItem('tasks', JSON.stringify(taskUpdate))
  }

  // Condicionar a que solo se pueda editar una sola tarea a la vez
  const editing = (id) => {
    setIsEditing(id)
  }

  const isHidden = (id) => {
    if (id === hidden) {
      setHidden('')
    } else {
      setHidden(id)
    }
  }

  const tasksList = <>{tasks.map((task) => (<Task key={task.id} isEditing={task.id === isEditing} editing={editing}
    deleteTask={deleteTask} task={task} saveTask={updateTask} removeHidden={isHidden} hidden={hidden !== task.id} />)
  )}</>
  return (
    <div className='container'>
      <h2>Mis tareas</h2>
      <FormTasks handleClick={addTask} />
      {tasks.length > 0
        ? tasksList
        : <div className='addIcon'>
          <div className='centerEmpty'><h4>No hay tareas agregadas</h4><i>{addIcon}</i>
          </div>
          </div>}
    </div>
  )
}

export default Container
