import React from "react";
import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={props.onDeleteTodo.bind(this, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
