import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, subtext, id }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}:{subtext}({id})
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string
}

export default Todo
