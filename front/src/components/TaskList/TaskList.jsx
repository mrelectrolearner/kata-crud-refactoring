import React, { useContext, useEffect } from 'react';

import { Store } from '../../context/Store';

const HOST_API = "http://localhost:8080/api";
const TaskList = (props) => {
  const { dispatch, state: { task } } = useContext(Store);
  const currentList = task.list;
  console.log(props.todoId)

  useEffect(() => {
    fetch(HOST_API + "/tasks")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list })
      })
      
  }, [dispatch]);


  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/task", {
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
      completed: event.target.checked,
      todoId:task.todoId
      
    };
    fetch(HOST_API + "/task", {
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
  return <div>
    <table >
      <thead>
        <tr>
          <td>ID</td>
          <td>Tarea</td>
          <td>¿Completado?</td>
        </tr>
      </thead>
      <tbody>
        { 
        currentList.filter((task)=>{console.log(currentList); return task.todoId===props.todoId}).map((task) => {
          console.log(task)
          return <tr key={task.id} style={task.completed ? decorationDone : {}}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td><div><input type="checkbox" defaultChecked={task.completed} onChange={(event) => onChange(event, task)}></input></div></td>
            <td><button onClick={() => onDelete(task.id)}>Eliminar</button></td>
            <td><button onClick={() => onEdit(task)} disabled={task.completed}>Editar</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export { TaskList }