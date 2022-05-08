import React, { useReducer } from 'react';
import { taskReducer } from './reducer/taskReducer';
import { Store, initialState } from './Store';

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>

}

export { StoreProvider }