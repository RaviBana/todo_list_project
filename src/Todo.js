import React from 'react'
import Todolist from './Todolist'

const Todo = ({TodoItem , onDelete, updateTodo}) => {
  return (
    <div id='todotable'>

    <Todolist todoItem={TodoItem} onDelete={onDelete} updateTodo={updateTodo} />
    </div>
  )
}

export default Todo