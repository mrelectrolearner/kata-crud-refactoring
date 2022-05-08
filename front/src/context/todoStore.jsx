import { createContext } from 'react';
const todoInitialState = {
    todo:{list:[], item:{}}
};

const TodoStore = createContext(todoInitialState)

export { TodoStore, todoInitialState }