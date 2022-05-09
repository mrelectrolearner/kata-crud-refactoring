import React, { useContext, useRef, useState } from 'react';

import { TodoStore } from '../../context/todoStore';


const HOST_API = "http://localhost:8080/api";

const TodoForm = () => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(TodoStore);
  const item = todo.item;
  const [state, setState] = useState(item);
  console.log(todo)

  const onAdd = (event) => {
    event.preventDefault();

    
    

    const request = {
      name: state.name,
      id: null,
      completed: false,
      tasks:state.tasks
    };

    
    
    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
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
      tasks:state.tasks
    };


    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return <form  ref={formRef}>
    <input
      type="text"
      name="name"
      placeholder="ToDo list"
      defaultValue={item.name}
      onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}  ></input>
    {item.id && <button  onClick={state.name?onEdit:null}>Actualizar</button>}
    {!item.id && <button   onClick={state.name?onAdd:null}>Crear</button>}
    
  </form>

}

export { TodoForm }