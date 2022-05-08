import React, { useContext, useRef, useState, useEffect } from 'react';

import { Store } from '../../context/Store';

const HOST_API = "http://localhost:8080/api";
const TaskForm = (props) => {
  const formRef = useRef(null);
  const { dispatch, state: { task } } = useContext(Store);
  const item = task.item;
  const [state, setState] = useState(item);
  const inputDefaultValue = item.name


  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
      todoId: props.todoId
    };


    fetch(HOST_API + "/task/" + props.todoId, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((task) => {
        dispatch({ type: "add-item", item: task });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();


    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
      todoId: props.todoId
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
        setState({ name: "" });
        formRef.current.reset();
      });

  }

  return <form className='flex-row' ref={formRef}>
    <input
      className='flex-large'
      type="text"
      name="name"
      placeholder="¿Qué piensas hacer hoy?"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button onClick={onEdit}>Actualizar</button>}
    {!item.id && <button  onClick={onAdd}>Crear</button>}
  </form>
}

export { TaskForm }