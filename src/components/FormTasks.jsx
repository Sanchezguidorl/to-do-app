import React, { useEffect, useRef, useState } from 'react'
import '../styles/FormTasks.css'
import { PropTypes } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function FormTasks ({ handleClick }) {
  const [task, setTask] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])
  // Limpia el input y evita recarga de la página
  const handleSubmit = (event) => {
    event.preventDefault()
    setTask('')
  }

  // Audita cambios en el input y lo asigna a task
  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-content'>
        <input
          ref={ref}
          placeholder='Escribe una nueva tarea'
          onChange={handleChange}
          value={task}
          type="text" />
        <button onClick={() => handleClick(task, uuidv4())} disabled={task.length < 10} type='submit' >Agregar</button>
        </div>
        {task.length > 0 && task.length < 10 ? <p className='form-error'>La tarea debe tener un minimo de 10 caracteres</p> : ''}
      </form>
    </>
  )
}

FormTasks.propTypes = {
  handleClick: PropTypes.func
}

export default FormTasks
