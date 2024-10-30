import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosRequest, addTodoRequest, deleteTodoRequest } from '../actions/todoActions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const { todos, error } = useSelector((state) => state);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo) {
      const todo = { id: Date.now(), title: newTodo, completed: false };
      dispatch(addTodoRequest(todo));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      {error && <p>Error: {error}</p>}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
