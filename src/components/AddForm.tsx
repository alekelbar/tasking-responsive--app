import React, { useState } from "react";
import { task } from "../models/task"

type FormArgs = {
  onAdd: (task: task) => void,
}


export const AddForm = ({ onAdd }: FormArgs) => {

  const [input, setInput] = useState('')

  const handleAddForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(new task(new Date().getTime().toString(), input, false))
    setInput('');
  }

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  }

  return (
    <form className="main__task-form container" onSubmit={handleAddForm}>
      <label htmlFor="input" className="main__label-form">TODO</label>
      <input
        autoComplete="off"
        name="input"
        type="text"
        placeholder="Type here!"
        value={input}
        onChange={handleOnChange}
        id="input"
        className="main__input-search"
      />
    </form>
  )
}
