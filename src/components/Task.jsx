import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCircleCheck, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

function Task ({ task, deleteTask, saveTask, editing, isEditing, hidden, removeHidden }) {
  const [taskEdit, setTaskEdit] = useState('')
  // Iconos de la interfaz
  const editIcon = <FontAwesomeIcon icon={faPencil} />
  const checkIcon = <FontAwesomeIcon icon={faCircleCheck} />
  const saveIcon = <FontAwesomeIcon icon={faFloppyDisk} />

  // Función para auditar cambios en el textarea
  const handleChange = (e) => {
    setTaskEdit({
      name: e.target.value,
      id: taskEdit.id
    })
  }

  // Setea el valor del contenido de la tarea sobre la que se trabajará al editar
  const getTask = () => {
    setTaskEdit(task)
  }

  return (
    <div>
      {/** Este condicional determina el contenido a mostrar deacuerdo a si se está editando o no */}
      {
        !isEditing
          ? <div className='task'>
            <p id='taskText' className={hidden ? 'hidden' : ''} onClick={() => removeHidden(task.id)} >{task.name}</p>
            <div>
              <i className='iconEdit' onClick={() => { editing(task.id); getTask() }} >{editIcon}</i>
              <i onClick={() => deleteTask(task.id)} >{checkIcon}</i>
            </div>
          </div>
          : <div className='task'>
            <textarea className='editTask' onChange={handleChange} value={taskEdit.name}></textarea>
            <div className='saveIcon'>
              <i className='iconEdit' onClick={() => {
                if (taskEdit.name.length > 10) {
                  editing()
                  saveTask(taskEdit)
                }
              }
                } >{saveIcon}</i>
            </div>
          </div>

      }
    </div>
  )
}

// Configuración de proptypes
Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  removeHidden: PropTypes.func.isRequired
}
export default Task
