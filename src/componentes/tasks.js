import React from 'react';

import Checkbox from './checkbox';

const Tasks = (props) => {
    const { lista, setLista } = props; //lista y setlista son arrays que vienen desde todolist por cambios usando useState
    
    const onChangeStatus = (evento) => { //Si hay un cambio en checkbox, dispara el evento
        let objeto = evento.target;
        console.log(evento.target);
        const { name, chequeado } = objeto; //objeto en el cual se lanza el evento - evento.target
        const listaActual = lista.map(item => ({ //funcion que recibe todos los items de la lista para chequear cambios en la lista
            ...item, //se hace spread de la lista para mantenerla
            done: item.id === name ? chequeado : item.done,} //compara el id del item con el objeto (nombre, que es igual a e.target) al cual se enfoca el evento de Changestatus
        ));
        
        setLista(listaActual); //Este es un nuevo cambio a lista y por eso se ocupa setLista
    };

    const onClickRemoveItem = (evento) => {
        console.log(evento.target)
        const listaActual = lista.filter(item => item.done === false); //Filtrando el array lista que traemos de todolist
        setLista(listaActual);
    };
    const mapeo = lista.map(item => (<Checkbox key={item.id} data={item} onChange={onChangeStatus} />));
    
    return (<div className= "listadoTodo">
        {lista.length ? mapeo : <h5>No hay tareas</h5>}
        {lista.length ? (
            <p>
                <button className="btn btn-danger px-2" onClick={onClickRemoveItem}>
                    Eliminar seleccion
                </button>
            </p>
        ) : null}
        
    </div>);
};

export default Tasks