import React from "react";
import { StoreProvider } from "./context/StoreProvider.jsx";
import {TodoList} from "./components/TodoList/TodoList"
import {TodoForm} from "./components/TodoForm/TodoForm"
import { TodoStoreProvider } from "./context/TodoStoreProvider.jsx";

function App() {
  return (
    <TodoStoreProvider>
      <StoreProvider>
    <h1>To-Do List</h1>
    <TodoForm/>
    <TodoList/>
  </StoreProvider>
  </TodoStoreProvider>
    
  );
}

export default App;
