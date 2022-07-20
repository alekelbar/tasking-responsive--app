import { task } from "../models/task"
import pending from './../assets/pending.svg'
import complete from './../assets/complete.svg'


type ListArgs = {
  todos: Array<task>;
  onDelete: (task: task) => void;
  onDone: (task: task) => void;
}

export const TaskList = ({ todos, onDelete, onDone }: ListArgs) => {

  return (
    <ul className="main__list container">
      <h3 className="main__title main__title--little">Go ahead...</h3>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`list__item ${todo.done ? 'list__item--done' : ''}`}
        >
          <p className="list__item-description"
          >
            {todo.description}
          </p>
          <span
            className="list__item-status"
          >
            DONE:
            {todo.done
              ? <img
                src={complete}
                className="list__item-logo"
              />
              : <img
                src={pending}
                className="list__item-logo"
              />
            }
          </span>

          <div className="list__buttons-container">
            <button onClick={() => { onDelete(todo) }} className="list__buttons">delete</button>
            <button onClick={() => { onDone(todo) }} className="list__buttons">Done</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
