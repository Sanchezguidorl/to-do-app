import React, { useState } from 'react'
import '../styles/FormTasks.css'
import { PropTypes } from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function FormTasks ({ handleClick }) {
  const [task, setTask] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    setTask('')
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <>
        <form onSubmit={handleSubmit} className='form'>
                <input
                onChange={handleChange}
                value={task}
                type="text" />
                <button onClick={() => handleClick(task, uuidv4()) } disabled={ task.length < 10 } type='submit' >Agregar</button>
            </form>
    </>
  )
}

FormTasks.propTypes = {
  handleClick: PropTypes.func
}

export default FormTasks
