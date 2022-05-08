import React, { useReducer } from 'react';
import { todoReducer } from './reducer/todoReducer';
import { TodoStore, todoInitialState } from './todoStore';

const TodoStoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, todoInitialState);

    return <TodoStore.Provider value={{ state, dispatch }}>
        {children}
    </TodoStore.Provider>

}

export { TodoStoreProvider }