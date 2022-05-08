import React, { useContext, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import { TodoStore } from '../../context/todoStore';
import { TodoStoreProvider } from '../../context/TodoStoreProvider';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';

const HOST_API = "http://localhost:8080/api";
const TodoList = () => {
    const { dispatch, state: { todo } } = useContext(TodoStore);
    const currentList = todo.list;

    useEffect(() => {
        fetch(HOST_API + "/todos")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list", list })
            })
    }, [dispatch]);


    const onDelete = (id) => {
        fetch(HOST_API + "/" + id + "/todo", {
            method: "DELETE"
        }).then((list) => {
            dispatch({ type: "delete-item", id })
        })
    };

    const onEdit = (task) => {
        dispatch({ type: "edit-item", item: task })
    };

    const onChange = (event, task) => {
        const request = {
            name: task.name,
            id: task.id,
            completed: event.target.checked
        };
        fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((task) => {
                dispatch({ type: "update-item", item: task });
            });
    };


    const decorationDone = {
        textDecoration: 'line-through'
    };
    return <Fragment>
        <TodoStoreProvider>
            <div>
                {currentList.map((todo) => {
                return<div key={todo.name}>
               <div>
               <label>{todo.name}-{todo.id} </label>
               <button>Eliminar</button>
                </div>
                <div>
               <TaskForm todoId={todo.id}/>
               <TaskList todoId={todo.id}/>
                </div>
                </div>
                }
                

                )}

            </div>
        </TodoStoreProvider>
    </Fragment>
}

export { TodoList }