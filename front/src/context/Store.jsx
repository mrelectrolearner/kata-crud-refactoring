import { createContext } from 'react';
const initialState = {
    task: { list: [], item: {} }
};

const Store = createContext(initialState)

export { Store, initialState }