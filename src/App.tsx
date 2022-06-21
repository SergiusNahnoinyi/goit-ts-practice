import React, { useState } from 'react';
import { IItem } from './types/todo';

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  function todosAddHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [...prevTodos, {
        id: Math.random().toString(),
        title: todo.title
      }
      ]
    })    
  }

  function todosDeleteHandler(id: string) { 
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => {
        return todo.id !== id;
      })
    })    
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={todosAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todosDeleteHandler} />
    </div>
  );
}

export default App;
