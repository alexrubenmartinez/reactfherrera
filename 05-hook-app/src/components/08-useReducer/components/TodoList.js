import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          index={i}
          key={todo.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  )
}

TodoListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
}
