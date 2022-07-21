import React, { useReducer } from 'react'
import { task } from '../models/task';
import { actionType, todoReducer } from '../reducers/todoReducer';

// persistencia de datos...
const init = (): Array<task> => {
  return JSON.parse(localStorage.getItem('todos')!) || [];
}

type useTodoReturn = {
  countPending: number
  todos: Array<task>;
  handleAdd: (task: task) => void
  handleDelete: (task: task) => void
  onDone: (task: task) => void
}

export const useTodo = (): useTodoReturn => {

  const [todos, dispatch] = useReducer(todoReducer, init());
  const countPending = todos.filter(todo => !todo.done).length;

  const handleAdd = (task: task): void => {
    dispatch({ type: actionType.add, payload: task });
  }

  const handleDelete = (task: task): void => {
    dispatch({ type: actionType.remove, payload: task });
  }

  const onDone = (task: task): void => {
    dispatch({ type: actionType.done, payload: task });
  }

  return {
    countPending,
    todos,
    handleAdd,
    handleDelete,
    onDone
  }

}
