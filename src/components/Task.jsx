import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Task.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCircleXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

function Task ({ task, id, deleteTask, editTask }) {
  const editIcon = <FontAwesomeIcon icon={faPencil} />
  const deleteIcon = <FontAwesomeIcon icon={faCircleXmark} />
  const saveIcon = <FontAwesomeIcon icon={faFloppyDisk} />
  const [hidden, setHidden] = useState(true)
  const removeHidden = () => {
    setHidden(!hidden)
  }

  return (
  <div>
    <div className='task'>
      <p className={hidden && 'hidden'} onClick={removeHidden} >{task}</p>
      <div>
        <i className='iconEdit' onClick={ () => deleteTask(id)} >{editIcon}</i>
        <i onClick={ () => editTask(id)} >{deleteIcon}</i>
      </div>
      </div>
      <div className='task'>
      <textarea className='editTask'></textarea>
      <div className='saveIcon'>
        <i className='iconEdit' >{saveIcon}</i>
      </div>
    </div>
  </div>
  )
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired
}
export default Task
