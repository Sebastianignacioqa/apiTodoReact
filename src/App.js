import './App.css';
import Todolist from './componentes/todolist';
import React, {useEffect, useState} from 'react';
import { body } from 'jquery';
import Checkbox from './componentes/checkbox';
import Tasks from "./componentes/tasks";

function App() {

  const [tarea, setTarea]= useState([]);
  

  useEffect(() => {
    cargarTarea();
  },[]);

  const cargarTarea = () => {
    fetch ("https://assets.breatheco.de/apis/fake/todos/user/sebastianignacioqa", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log(res)
      return res.json()})

    .then(body => {

      console.log(body.map(t => t.label).join(", "))
      setTarea(body)
      
    })

    .catch(error => console.log(error))
    
  }
  const fetchmapeo = tarea.map(t=> (<Checkbox key= {t.label} data={t}/>));
  tarea.map (tarea=> <Tasks lista={tarea.label} setlista={setTarea.label}/>);

  return (
    <div className="App">
      
      
      <h1>Lista de pendientes</h1>
      <Todolist /></div>
      
  );
}

export default App;
