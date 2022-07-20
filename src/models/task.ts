import { todo } from "../interfaces/todo";


export class task implements todo {
  id: string;
  description: string;
  done: boolean;

  constructor(id: string, descripcion: string, done: boolean) {
    this.description = descripcion;
    this.id = id;
    this.done = done;
  }
}
