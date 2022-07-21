import { useTodo } from '../hooks/useTodo';
import './../styles/App.css'
import { AddForm } from './AddForm'
import { TaskList } from './TaskList'


export const App = () => {

  const { handleAdd, handleDelete, onDone, countPending, todos } = useTodo();

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
