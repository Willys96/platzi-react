import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import './TodoItem.css'

function TodoItem({ text, completed, onComplete, eliminarTodo }) {

    /*
    - El ${} se usa para insertar comandos javascript (Validaciones - Condiciones)
    - El ${...completed && xxx...} indica que se ejecuta si y solo si completed es true, es decir > 0, Cadena es decir diferente a null o undefined o false
    */   

    return (
      <li className='TodoItem'>
        {/* <span 
            className={ `Icon Icon-check ${ completed && "Icon-check--active" }`}
            onClick={ onComplete }
        >V</span> */}
        <CompleteIcon completed={ completed } onComplete={ onComplete }/>
        <p className={ `TodoItem-p ${ completed &&  "TodoItem-p--complete" }` }>{ text }</p>
        <DeleteIcon eliminarTodo={ eliminarTodo }/>
        {/* <span 
            className='Icon Icon-delete'
            onClick={ eliminarTodo }
        >X</span> */}
      </li>
    );
  }
  
export { TodoItem };