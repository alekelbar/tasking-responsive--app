import { task } from "../models/task";

export enum actionType {
  add,
  remove,
  done,
}

type todoAction = {
  type: actionType;
  payload: task;
};

export const initialState: Array<task> = [];

export const todoReducer = (state: Array<task> = initialState, todoAction: todoAction) => {
  const { type, payload } = todoAction;
  switch (type) {
    case actionType.add:
      return [payload, ...state];
    case actionType.remove:
      return state.filter(e => e.id !== payload.id);
    case actionType.done:
      return state.map(todo => {
        if (todo.id !== payload.id)
          return todo;
        todo.done = !todo.done;
        return todo;
      });

    default:
      return state;
  }
};
