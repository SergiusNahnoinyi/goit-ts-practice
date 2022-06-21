import React, { useState } from "react";
import { IItem } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, "title">;

const AddTodo: React.FC<IProps> = (props) => {
  const [todo, setTodo] = useState<Partial<OnlyTitle>>({});

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({
      title: e.target.value,
    });
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!todo.title) {
      return;
    }
    props.onAddTodo(todo as IItem);
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" id="add-todo" onChange={inputHandler} />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
