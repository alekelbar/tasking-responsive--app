import { useReducer } from 'react'
import { task } from '../models/task';
import { actionType, todoReducer } from '../reducers/todoReducer';
import './../styles/App.css'
import { AddForm } from './AddForm'
import { TaskList } from './TaskList'


// persistencia de datos...
const init = (): Array<task> => {
  return JSON.parse(localStorage.getItem('todos')!) || [];
}

export const App = () => {

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

  localStorage.setItem('todos', JSON.stringify(todos));


  return (
    <div>
      <main className="main">
        <section className="main__container container">
          <h1 className="main__title">Task-app {`(${countPending})`}</h1>
          {/* formulario de tarea */}
          <AddForm onAdd={handleAdd} />

          {/* Lista de tareas... */}
          <TaskList todos={todos} onDelete={handleDelete} onDone={onDone} />
        </section>

      </main>

    </div>
  )
}
