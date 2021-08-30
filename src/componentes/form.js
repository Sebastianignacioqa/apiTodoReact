import React, { useState } from 'react';



const Form = (props) => {
    const [descripcion, setDescripcion] = useState ("");
    const { agregarItem } = props;
    const handleSubmit = (evento) => {
        evento.preventDefault();

        agregarItem({
            done: false,
            id:(+new Date()).toString(),
            descripcion,
            
        });
        console.log(descripcion)
        
        
        setDescripcion("");
    }

    const seteoDescripcion = (evento) => {
        setDescripcion(evento.target.value);
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <div className="todolist">
            <div className= "formulario">
                <input type="text" 
                    className="texto" 
                    value={descripcion} //Aca seteamos el value que es igual al estado descripcion
                    onChange={seteoDescripcion}> 
                </input> 
                <button className="btn btn-success m-3" disabled={descripcion ? "" : "disabled"}> 
                    AGREGAR
                </button>
            </div> 
            </div>
        </form> //Aca seteamos que el evento OnChange le otorgue el valor de lo escrito
            )
}

export default Form