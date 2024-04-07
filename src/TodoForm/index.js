import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

const TodoForm = () => {
    const {
        setOpenModal,
        addTodo
    } = React.useContext( TodoContext );

    const [ newTodoValue, setnewTodoValue ] = React.useState( '' );

    const onSubmit = ( event ) => {
        event.preventDefault();
        addTodo( newTodoValue );
        setOpenModal( false );
    }
    
    const onCancel = (  ) => {
        setOpenModal( false );
    }

    const onChange = ( event ) => {
        setnewTodoValue( event.target.value );
    }

    return ( 
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo"
                value={ newTodoValue }
                onChange={ onChange }
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={ onCancel }
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    ); 
}
 
export { TodoForm };