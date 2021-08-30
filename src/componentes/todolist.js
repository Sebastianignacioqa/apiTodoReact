import React, { useState } from "react"

import Form from "./form"
import Tasks from "./tasks"

const Todolist = () => {
    
    const [lista, setLista] = useState([]);
    const agregarItem = (itemAgregado) => {
        setLista([...lista, itemAgregado]);
        console.log(itemAgregado)
    };
    
    return (<div className="container">
    <Form agregarItem={agregarItem} />
    <Tasks lista={lista} setLista={setLista} />
    </div>)

}


export default Todolist