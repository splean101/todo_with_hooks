import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            data.map(d => setTodos([...todos, { id: uuid(), text: d.title }]))
        })
        .catch((error) => console.error(error));
  },[]);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodoClick = () => {
    setTodos([...todos, { id: uuid(), text: newTodo }]);
    setNewTodo('');
  };

  const handleDeleteTodoClick = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={uuid()}>
            {todo.text}
            <button onClick={() => handleDeleteTodoClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>
  );
}

export default TodoList;
