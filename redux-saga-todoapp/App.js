// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './toDoApp';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
