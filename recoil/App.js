import React from "react";
import { RecoilRoot } from "recoil";
import "./styles.css";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Recoil</h1>
      <h2>Start learning using this ToDo List example</h2>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
