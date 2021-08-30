import React, {useState, useEffect} from 'react';
import Checkbox from './checkbox';

const Fetch = () => {

const [tarea, setTarea]= useState([]);
  const fetchmapeo = tarea.map(t=> (<Checkbox key= {t.label} data={t}/>))
  
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
}

export default Fetch